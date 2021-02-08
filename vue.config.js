// module.exports = {
//   publicPath: "/sub-app1/",
//   outputDir: "docs",
//   devServer: {
//     port: "9999"
//   },
//   pluginOptions: {
//     consoleOs: {
//       id: "my-sub-app1"
//     }
//   }
// };

const { name } = require("./package");
module.exports = {
  // publicPath: "/sub-app1/",
  devServer: {
    port: "9999",
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`
    }
  },
  chainWebpack: (config) => {
    config.module
      .rule("cast")
      .test(/\.cast$/)
      .use("raw-loader")
      .loader("raw-loader")
      .end();
  }
};
