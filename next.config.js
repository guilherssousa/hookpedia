// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });

// module.exports = withBundleAnalyzer({
//   webpack: function (config) {
//     config.module.rules.push({ test: /\.md$/, use: "raw-loader" });

//     return config;
//   },
// });

module.exports = {
  webpack: function (config) {
    config.module.rules.push({ test: /\.md$/, use: "raw-loader" });

    return config;
  },
};
