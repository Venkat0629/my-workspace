const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfeApp',
  filename: 'remoteEntry.js',

  exposes: {
    './TodoListModule': './projects/mfe-app/src/app/todo-list/todo-list.module.ts',
    "./HomeModule": "./projects/mfe-app/src/app/home/home.module.ts",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },


});
