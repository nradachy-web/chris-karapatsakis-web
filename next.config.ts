import type { NextConfig } from "next";

/**
 * chriskarapatsakis.com - static export.
 * Set NEXT_PUBLIC_BASE_PATH=/chris-karapatsakis-web to build for a GitHub Pages
 * project page (https://<user>.github.io/chris-karapatsakis-web/). Leave it unset
 * to serve at the domain root (chriskarapatsakis.com via public/CNAME). The
 * asset() helper reads the same env var so image paths stay correct either way.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: {
    unoptimized: true,
  },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
