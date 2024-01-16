|env  | version|
| ---- | ---- |
|node  | v20.9.0|
|npm | 10.1.0|
|pnpm|8.10.5|



With next.config.js:
```
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

```
When I execute commands `pnpm build` and `pnpm start`
and visite `http://localhost:3002/api/health`, the browser will show result `500 Internal Server Error.`,and the terminal will display:
```
homepage [Function: C]
 ⨯ TypeError: E.setGlobalFederationConstructor is not a function
    at 7383 (/Users/luoju/Documents/GitHub/next_mf_example/.next/server/webpack-api-runtime.js:53:5572)
    at __webpack_require__ (/Users/luoju/Documents/GitHub/next_mf_example/.next/server/webpack-api-runtime.js:53:62279)
    at 7090 (/Users/luoju/Documents/GitHub/next_mf_example/.next/server/webpack-api-runtime.js:53:36555)
    at __webpack_require__ (/Users/luoju/Documents/GitHub/next_mf_example/.next/server/webpack-api-runtime.js:53:62279)
    at 1961 (/Users/luoju/Documents/GitHub/next_mf_example/.next/server/webpack-api-runtime.js:1:66)
    at __webpack_require__ (/Users/luoju/Documents/GitHub/next_mf_example/.next/server/webpack-api-runtime.js:53:62279)
    at 984 (/Users/luoju/Documents/GitHub/next_mf_example/.next/server/webpack-api-runtime.js:53:41861)
    at __webpack_require__ (/Users/luoju/Documents/GitHub/next_mf_example/.next/server/webpack-api-runtime.js:53:62279)
    at u (/Users/luoju/Documents/GitHub/next_mf_example/.next/server/webpack-api-runtime.js:54:2791)
    at /Users/luoju/Documents/GitHub/next_mf_example/.next/server/webpack-api-runtime.js:54:2916
``` 


But when I comment the usage code of NextFederationPlugin:

```js
const NextFederationPlugin = require("@module-federation/nextjs-mf");
module.exports = {
  webpack(config, options) {
    // config.plugins.push(
    //   new NextFederationPlugin({
    //     name: "shop",
    //     filename: "static/chunks/remoteEntry.js",
    //     exposes: {
    //       "./shop": "./pages/shop.js",
    //     },
    //   })
    // );

    return config;
  },
};
```
and visite `http://localhost:3002/api/health`, the browser will show result `ok`.

