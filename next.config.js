/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Keep static export mode
  images: {
    unoptimized: true, // Disable image optimization
  },
};

module.exports = nextConfig;




