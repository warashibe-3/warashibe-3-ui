const rewrites = () => {
  const base = "http://ec2-54-168-156-21.ap-northeast-1.compute.amazonaws.com:8001";
  return [
    {
      source: "/api/v1/:path*",
      destination: `${base}/api/v1/:path*`,
    },
    {
      source: "/hello",
      destination: `${base}/hello`,
    },
  ];
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites,
  reactStrictMode: true,
  poweredByHeader: false,
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
