const rewrites = () => {
  const host = "ec2-54-168-156-21.ap-northeast-1.compute.amazonaws.com";
  const javaBase = `http://${host}:8080`;
  const pythonBase = `http://${host}:8001`;
  return [
    {
      source: "/api/v1/line-login/:path*",
      destination: `${pythonBase}/api/v1/line-login/:path*`,
    },
    {
      source: "/api/v1/blockchain/:path*",
      destination: `${pythonBase}/api/v1/blockchain/:path*`,
    },
    {
      source: "/api/v1/:path*",
      destination: `${javaBase}/:path*`,
    },
    {
      source: "/hello",
      destination: `${pythonBase}/hello`,
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
