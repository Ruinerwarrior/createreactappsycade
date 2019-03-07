#!/usr/bin/env node
let shell = require('shelljs');
let colors = require('colors');
let fs = require('fs'); //fs already comes included with node.
let templates = require('./templates/templates.js');
let path = require('path');
let readlineSync = require('readline-sync');

let appName = process.argv[2]
let appDirectory = '';
let defaultFilesToRemove = [
  'App.tsx', 'App.test.tsx', 'index.css', 'logo.svg', 'App.css',
];

let conditions = [];

const createReactApp = (commandsToRun) => {
  return new Promise(resolve => {
    try {
      if (appName) {
        console.log(commandsToRun.join(' '));
        shell.exec(commandsToRun.join(' '), () => {
          console.log(`Created react app with typescript\n`);
          resolve(true)
        })
      } else {
        console.log("\nNo app name was provided.".red)
        console.log("\nProvide an app name in the following format: ")
        console.log("\ncreate-react-redux-router-app ", "app-name\n".cyan)
        resolve(false)
      }
    } catch(error) {
      console.log('Something went wrong while creating react app, try to run: "npm install -g create-react-app" before running "create-react-sycade-app"')
    }
  })
}

const installPackages = async (packagesToInstall) => {
  return new Promise(resolve => {
    try {
      if (packagesToInstall.length > 0) {
        console.log(`installing packages: ${packagesToInstall.join(' ')}\n`);
        shell.exec(`npm install --save` + packagesToInstall.join(' '));
        console.log('packages installed\n'.green);
      }
      resolve(true);
    } catch (error) {
      console.log(error + ''.red);
      resolve(false);
    }
  })
}

const installDevPackages = async (devPackagesToInstall) => {
  return new Promise(resolve => {
    try {
      if (devPackagesToInstall.length > 0) {
        console.log(`installing dev dependency packages: ${devPackagesToInstall.join(' ')}\n`);
        shell.exec(`npm install --save-dev` + devPackagesToInstall.join(' '));
        console.log('packages installed\n'.green);
      }
      resolve(true);
    } catch (error) {
      console.log(error + ''.red);
      resolve(false);
    }
  })
}

const createCustomTemplate = async () => {
  return new Promise(resolve => {
      templates.forEach(file => {
        if(file.reqconditions.every(rc => { return conditions.indexOf(rc) !== -1 })) {
          ensureDirectoryExistence(file.fileName);
          if (file.value !== null) {
            fs.writeFile(`${appDirectory}/src/${file.fileName}`, file.value(conditions), function (err) {
              if (err) { return console.log(err) }
            })
          }
        }
      });
      resolve(true);
  })
}

const deleteUnnecessaryFiles = async () => {
  return new Promise(resolve => {
    try {
      // remove unnecessary files of the create-react-app
      defaultFilesToRemove.forEach(file => {
        fs.unlink(`${appDirectory}/src/${file}`, (err) => { });
      });
      resolve(true)
    } catch (error) {
      console.log(error + ''.red);
      resolve(false);
    }
  })
}

function ensureDirectoryExistence(filePath) {
  let dirname = path.dirname(`${appDirectory}/src/${filePath}`);
  if (fs.existsSync(dirname)) {
    return;
  }
  shell.mkdir('-p', dirname)
  return;
}

const run = async () => {
  let commandsToRun = [];
  let packagesToInstall = [];
  let devPackagesToInstall = [];

  console.log('\nanswer the questions to navigate through the project setup\n');

  if(appName === undefined) {
    appName = readlineSync.question('\nWhat is the name of the application?\n');
  }
  if (appName !== undefined) {
    appDirectory = `${process.cwd()}/${appName.toLowerCase()}`;
    commandsToRun.push(`npx create-react-app ${appName.toLowerCase()} --typescript`);
  }

  if (readlineSync.keyInYN('\nDo you want to use redux with thunk?(y/n)\n')) {
    packagesToInstall.push('redux');
		packagesToInstall.push('react-redux');
		packagesToInstall.push('redux-thunk');
		devPackagesToInstall.push('@types/react-redux');
		devPackagesToInstall.push('@types/redux-thunk');
		devPackagesToInstall.push('redux-devtools-extension');
    conditions.push('redux');
	}
	
	if (readlineSync.keyInYN('\nDo you want to setup generic async actions and reducers?(y/n)\n')) {
    conditions.push('asyncactions');
  }

  if (readlineSync.keyInYN('\nDo you want to use routes?(y/n)\n')) {
    packagesToInstall.push('react-router-dom');
    conditions.push('routes');
    devPackagesToInstall.push('@types/react-router-dom @types/react-router');
  }

  if (readlineSync.keyInYN('\nDo you want to have a basic api setup?(y/n)\n')) {
    packagesToInstall.push('axios');
    conditions.push('api');
  }

  // if (readlineSync.keyInYN('\nDo you want to setup authorization?(y/n)')) {
  //   conditions.push('authorization');
  // }

  if (readlineSync.keyInYN('\nDo you want to use bulma?(y/n)\n')) {
    packagesToInstall.push('bulma');
    conditions.push('bulma');
    devPackagesToInstall.push('@types/react-redux');
  }

  if(readlineSync.keyInYN('\nDo you want sass support?(y/n)\n')) {
    packagesToInstall.push('node-sass');
    conditions.push('sass');
  }

  if (!await createReactApp(commandsToRun)) {
    console.log('\nSomething went wrong with create-react-app\n');
    return;
  }

  //move to created projecty folder
  shell.cd(`${appName}`);

  if (!await installPackages(packagesToInstall)) {
    console.log('\nSomething went wrong while installing packages\n'.red);
    return;
  }

  if (!await installDevPackages(devPackagesToInstall)) {
    console.log('\nSomething went wrong while installing dev packages\n'.red);
    return;
  }

  if (!await createCustomTemplate()) {
    console.log('\nSomething went wrong while creating custom template\n'.red);
    return;
  }

  if (!await deleteUnnecessaryFiles()) {
    console.log('\nSomething went wrong while creating removing unnessesary files template\n'.red);
    return;
  }

  console.log('\nSucceeded, you can start programming\n'.green);
}

run();
