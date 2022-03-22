// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/some-backend/:path*',
        destination: 'https://www.google.com/search?q=:path*',
      },
    ];
  },
};

module.exports = withBundleAnalyzer(nextConfig);
