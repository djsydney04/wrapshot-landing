import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/signin",
        destination: "https://app.wrapshoot.com",
        permanent: false,
      },
      {
        source: "/sign-in",
        destination: "https://app.wrapshoot.com",
        permanent: false,
      },
      {
        source: "/login",
        destination: "https://app.wrapshoot.com",
        permanent: false,
      },
      {
        source: "/auth/signin",
        destination: "https://app.wrapshoot.com",
        permanent: false,
      },
      {
        source: "/auth/login",
        destination: "https://app.wrapshoot.com",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
