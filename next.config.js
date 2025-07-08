// next.config.js for static export and GitHub Pages
const isGithubPages = process.env.GITHUB_PAGES === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: isGithubPages ? '/portfolio' : '', // change '/portfolio' to your repo name if different
    assetPrefix: isGithubPages ? '/portfolio/' : '',
    images: { unoptimized: true },
};

module.exports = nextConfig;
