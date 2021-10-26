const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#333",
              "@gray-color": "#7e7e7e",
              "@blue-color": "#40a9ff",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
