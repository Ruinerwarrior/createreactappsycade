let readlineSync = require('readline-sync');

module.exports = [
  {
    question: '\nDo you want to use redux with thunk?\n',
    conditions: ["redux"],
    packagesToInstall: ["redux", "react-redux", "redux-thunk"],
    devPackagesToInstall: ["@types/react-redux", "redux-devtools-extension"]
  },
  {
    question: '\nDo you want to setup generic async actions and reducers?\n',
    conditions: ["asyncactions"],
    packagesToInstall: [],
    devPackagesToInstall: []
  },
  {
    question: '\nDo you want to use routes?\n',
    conditions: ["routes"],
    packagesToInstall: ["react-router-dom"],
    devPackagesToInstall: ["@types/react-router-dom", "@types/react-router"]
  },
  {
    question: '\nDo you want to have a basic api setup?\n',
    conditions: ["api"],
    packagesToInstall: ["axios"],
    devPackagesToInstall: []
  },
  {
    question: '\nDo you want to use bulma?\n',
    conditions: ["bulma"],
    packagesToInstall: ["bulma"],
    devPackagesToInstall: []
  },
  {
    question: '\nDo you want sass support?\n',
    conditions: ["sass"],
    packagesToInstall: ["node-sass"],
    devPackagesToInstall: []
  },
]