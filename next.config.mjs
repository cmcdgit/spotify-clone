/** @type {import('next').NextConfig} */

// made these changes after getting a deprecation warning
// https://stackoverflow.com/questions/77447587/the-images-domains-configuration-is-deprecated-please-use-images-remotepatte
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sexnjaxozocdejxllnzu.supabase.co',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
