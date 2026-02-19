-- ============================================
-- Community Forum Schema
-- ============================================

-- Profiles
create table public.profiles (
  id uuid primary key references auth.users on delete cascade,
  username text unique not null,
  display_name text,
  avatar_url text,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

-- Categories
create table public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  description text,
  icon text, -- lucide icon name
  sort_order int default 0,
  post_count int default 0 not null,
  created_at timestamptz default now() not null
);

-- Posts
create table public.posts (
  id uuid primary key default gen_random_uuid(),
  author_id uuid not null references public.profiles(id) on delete cascade,
  category_id uuid not null references public.categories(id) on delete cascade,
  title text not null,
  body text not null,
  slug text unique not null,
  is_pinned boolean default false,
  vote_count int default 0 not null,
  comment_count int default 0 not null,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

-- Comments
create table public.comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.posts(id) on delete cascade,
  author_id uuid not null references public.profiles(id) on delete cascade,
  parent_id uuid references public.comments(id) on delete cascade,
  body text not null,
  vote_count int default 0 not null,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

-- Votes (polymorphic: either post_id or comment_id, not both)
create table public.votes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  post_id uuid references public.posts(id) on delete cascade,
  comment_id uuid references public.comments(id) on delete cascade,
  created_at timestamptz default now() not null,
  constraint vote_target_check check (
    (post_id is not null and comment_id is null) or
    (post_id is null and comment_id is not null)
  ),
  constraint unique_post_vote unique (user_id, post_id),
  constraint unique_comment_vote unique (user_id, comment_id)
);

-- Indexes
create index idx_posts_category on public.posts(category_id);
create index idx_posts_author on public.posts(author_id);
create index idx_posts_slug on public.posts(slug);
create index idx_posts_created on public.posts(created_at desc);
create index idx_comments_post on public.comments(post_id);
create index idx_comments_parent on public.comments(parent_id);
create index idx_votes_post on public.votes(post_id);
create index idx_votes_comment on public.votes(comment_id);
create index idx_votes_user on public.votes(user_id);
create index idx_categories_slug on public.categories(slug);

-- ============================================
-- Triggers & Functions
-- ============================================

-- Auto-create profile on user signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, username, display_name)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'username', split_part(new.email, '@', 1)),
    coalesce(new.raw_user_meta_data->>'display_name', new.raw_user_meta_data->>'username', split_part(new.email, '@', 1))
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Auto-update updated_at
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger set_profiles_updated_at before update on public.profiles
  for each row execute function public.set_updated_at();
create trigger set_posts_updated_at before update on public.posts
  for each row execute function public.set_updated_at();
create trigger set_comments_updated_at before update on public.comments
  for each row execute function public.set_updated_at();

-- Update post vote_count
create or replace function public.update_post_vote_count()
returns trigger as $$
begin
  if tg_op = 'INSERT' then
    update public.posts set vote_count = vote_count + 1 where id = new.post_id;
  elsif tg_op = 'DELETE' then
    update public.posts set vote_count = vote_count - 1 where id = old.post_id;
  end if;
  return null;
end;
$$ language plpgsql security definer;

create trigger on_post_vote_insert
  after insert on public.votes
  for each row
  when (new.post_id is not null)
  execute function public.update_post_vote_count();

create trigger on_post_vote_delete
  after delete on public.votes
  for each row
  when (old.post_id is not null)
  execute function public.update_post_vote_count();

-- Update comment vote_count
create or replace function public.update_comment_vote_count()
returns trigger as $$
begin
  if tg_op = 'INSERT' then
    update public.comments set vote_count = vote_count + 1 where id = new.comment_id;
  elsif tg_op = 'DELETE' then
    update public.comments set vote_count = vote_count - 1 where id = old.comment_id;
  end if;
  return null;
end;
$$ language plpgsql security definer;

create trigger on_comment_vote_insert
  after insert on public.votes
  for each row
  when (new.comment_id is not null)
  execute function public.update_comment_vote_count();

create trigger on_comment_vote_delete
  after delete on public.votes
  for each row
  when (old.comment_id is not null)
  execute function public.update_comment_vote_count();

-- Update post comment_count
create or replace function public.update_post_comment_count()
returns trigger as $$
begin
  if tg_op = 'INSERT' then
    update public.posts set comment_count = comment_count + 1 where id = new.post_id;
  elsif tg_op = 'DELETE' then
    update public.posts set comment_count = comment_count - 1 where id = old.post_id;
  end if;
  return null;
end;
$$ language plpgsql security definer;

create trigger on_comment_change
  after insert or delete on public.comments
  for each row execute function public.update_post_comment_count();

-- Update category post_count
create or replace function public.update_category_post_count()
returns trigger as $$
begin
  if tg_op = 'INSERT' then
    update public.categories set post_count = post_count + 1 where id = new.category_id;
  elsif tg_op = 'DELETE' then
    update public.categories set post_count = post_count - 1 where id = old.category_id;
  end if;
  return null;
end;
$$ language plpgsql security definer;

create trigger on_post_change
  after insert or delete on public.posts
  for each row execute function public.update_category_post_count();

-- ============================================
-- Row Level Security
-- ============================================

alter table public.profiles enable row level security;
alter table public.categories enable row level security;
alter table public.posts enable row level security;
alter table public.comments enable row level security;
alter table public.votes enable row level security;

-- Profiles
create policy "Profiles are viewable by everyone" on public.profiles for select using (true);
create policy "Users can insert own profile" on public.profiles for insert with check (auth.uid() = id);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);

-- Categories
create policy "Categories are viewable by everyone" on public.categories for select using (true);

-- Posts
create policy "Posts are viewable by everyone" on public.posts for select using (true);
create policy "Authenticated users can create posts" on public.posts for insert with check (auth.uid() = author_id);
create policy "Users can update own posts" on public.posts for update using (auth.uid() = author_id);
create policy "Users can delete own posts" on public.posts for delete using (auth.uid() = author_id);

-- Comments
create policy "Comments are viewable by everyone" on public.comments for select using (true);
create policy "Authenticated users can create comments" on public.comments for insert with check (auth.uid() = author_id);
create policy "Users can update own comments" on public.comments for update using (auth.uid() = author_id);
create policy "Users can delete own comments" on public.comments for delete using (auth.uid() = author_id);

-- Votes
create policy "Votes are viewable by everyone" on public.votes for select using (true);
create policy "Authenticated users can vote" on public.votes for insert with check (auth.uid() = user_id);
create policy "Users can remove own votes" on public.votes for delete using (auth.uid() = user_id);

-- ============================================
-- Seed: Categories
-- ============================================

insert into public.categories (name, slug, description, icon, sort_order) values
  ('General Discussion', 'general-discussion', 'Chat about anything related to film production', 'MessageSquare', 1),
  ('Scheduling Tips', 'scheduling-tips', 'Share and learn scheduling best practices', 'Calendar', 2),
  ('Script & Breakdown', 'script-breakdown', 'Discuss script analysis and scene breakdowns', 'FileText', 3),
  ('Budget & Finance', 'budget-finance', 'Talk budgets, cost reports, and financial planning', 'DollarSign', 4),
  ('Feature Requests', 'feature-requests', 'Suggest and vote on new Wrapshoot features', 'Lightbulb', 5),
  ('Show & Tell', 'show-and-tell', 'Share your projects and production stories', 'Film', 6),
  ('Help & Support', 'help-support', 'Get help with Wrapshoot or production workflows', 'HelpCircle', 7);
