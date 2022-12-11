// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: [
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
      "1000logos.net",
      "mdbcdn.b-cdn.net",
      "upload.wikimedia.org",
      "avatars.githubusercontent.com",
      "s.iw.ro",
      "pubs.acs.org",
      "pbs.twimg.com",
      "images.squarespace-cdn.com",
      "media.gq-magazine.co.uk",
      "i.ytimg.com",
      "assets.mi6-hq.com",
      "universe.dk",
      "wallpaper.dog"
    ]
  }
};
export default config;
