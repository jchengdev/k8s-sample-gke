// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer =
  process.env.NODE_ENV !== 'production'
    ? require('@next/bundle-analyzer')({
        enabled: process.env.ANALYZE === 'true',
      })
    : config => config;

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
