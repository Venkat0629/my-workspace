const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfeApp',
  filename: 'remoteEntry.js',

  exposes: {
    "./HomeModule": "./projects/mfe-app/src/app/home/home.module.ts",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },


});
