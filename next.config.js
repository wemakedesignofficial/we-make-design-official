/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  ...(process.env.GITHUB_PAGES === 'true' ? { basePath: '/we-make-design' } : {}),
};

module.exports = nextConfig;
