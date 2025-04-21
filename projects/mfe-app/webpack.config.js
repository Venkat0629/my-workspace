const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfeApp',
  filename: 'remoteEntry.js',

  exposes: {
    './Component': './projects/mfe-app/src/app/app.component.ts',
    './TodoListModule': './projects/mfe-app/src/app/todo-list/todo-list.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },


});
