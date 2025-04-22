const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'hostApp',

  exposes: {
    './Component': './projects/host-app/src/app/app.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  remotes: {
    mfeApp: 'mfeApp@http://localhost:4300/remoteEntry.js',
  },
});
