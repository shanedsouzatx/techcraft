/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // images: {
  //   domains: [
  //     "aceternity.com",
  //     "assets.aceternity.com",
  //     "images.unsplash.com",
  //     "res.cloudinary.com",
  //   ],
  // },
  experimental: {
    turbo: true, // Enables Next.js Turbo mode (faster builds)
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Redirect from www.TechCrafttechnologies.com to TechCrafttechnologies.com
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.techcraftinc.com" }],
        destination: "https://techcraftinc.com/:path*",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      // Add a trailing slash to URLs if they don't have one
      {
        source: "/:path((?!.*\\.\\w{2,4}$).*)",
        destination: "/:path*/",
      },
    ];
  },
  trailingSlash: true,
};

export default nextConfig;
