const NextFederationPlugin = require("@module-federation/nextjs-mf");
module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "shop",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./shop": "./pages/shop.js",
        },
      })
    );

    return config;
  },
};
