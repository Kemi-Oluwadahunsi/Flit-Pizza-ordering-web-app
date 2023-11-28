// next.config.js
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx"],
};

module.exports = nextConfig;

const { parsed } = require("dotenv").config();

module.exports = {
  env: {
    ADMIN_USERNAME: parsed.ADMIN_USERNAME,
    ADMIN_PASSWORD: parsed.ADMIN_PASSWORD,
  },
};

