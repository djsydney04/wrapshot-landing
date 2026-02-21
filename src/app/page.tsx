import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import WhoItsFor from "@/components/WhoItsFor";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SectionTracker from "@/components/SectionTracker";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <SectionTracker section="hero"><Hero /></SectionTracker>
        <SectionTracker section="problem_solution"><ProblemSolution /></SectionTracker>
        <SectionTracker section="how_it_works"><HowItWorks /></SectionTracker>
        <SectionTracker section="features"><Features /></SectionTracker>
        <SectionTracker section="who_its_for"><WhoItsFor /></SectionTracker>
        <SectionTracker section="social_proof"><SocialProof /></SectionTracker>
        <SectionTracker section="pricing"><Pricing /></SectionTracker>
        <SectionTracker section="faq"><FAQ /></SectionTracker>
        <SectionTracker section="final_cta"><FinalCTA /></SectionTracker>
      </main>
      <Footer />
    </>
  );
}
