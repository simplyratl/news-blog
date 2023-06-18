const domain = require("domain");
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    domains: ["localhost", "www.businessghana.com", "s.yimg.com"],
    // domains: [
    //   "localhost",
    //   "images.bfmtv.com",
    //   "navbharattimes.indiatimes.com",
    //   "telecomtalk.info",
    //   "www.sweclockers.com",
    //   "ewu383c9678.exactdn.com",
    //   "pliki.wnp.pl",
    //   "i.ssimg.cn",
    // ],
  },
};

module.exports = nextConfig;
