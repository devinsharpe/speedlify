module.exports = {
  name: "devsharpe.io", // optional, falls back to object key
  description: "Devin Sharpe's Personal Site",
  // skip if localhost
  // skip if this is a new fork of the speedlify (not Zach’s)
  // skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
  options: {
    frequency: 60 * 23, // 23 hours
    // Use "run" if the sites don’t share assets on the same origin
    //           and we can reset chrome with each run instead of
    //           each site in every run (it’s faster)
    // Use "site" if sites are all on the same origin and share assets.
    freshChrome: "site"
  },
  urls: [
    "https://www.devsharpe.io/",
    "https://www.devsharpe.io/notes",
    // Popular Posts
    "https://www.devsharpe.io/notes/signin-with-apple-with-next-auth",
    "https://www.devsharpe.io/notes/caddyfile-local-development"
  ]
};
