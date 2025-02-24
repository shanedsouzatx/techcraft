/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  experimental: {
    turbo: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.techcraftinc.com" }],
        destination: "https://techcraftinc.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
