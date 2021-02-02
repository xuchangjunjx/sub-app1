module.exports = {
  publicPath: "/sub-app1/",
  outputDir: "docs",
  devServer: {
    port: "9999"
  },
  pluginOptions: {
    consoleOs: {
      id: "my-sub-app1"
    }
  }
};
