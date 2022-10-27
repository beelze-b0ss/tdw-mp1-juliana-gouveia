/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: "/",
  extends: [
    //...
    'plugin:@next/next/recommended',
  ],
};
