import type { NextConfig } from "next";

// next.config.js for static export and GitHub Pages
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'export',
  basePath: isGithubPages ? '/portfolio' : '',
  assetPrefix: isGithubPages ? './' : '',
  images: { unoptimized: true },
};

export default nextConfig;
