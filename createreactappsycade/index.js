#!/usr/bin/env node

//import packages
let utils = require('./utils');
let shell = require('shelljs');
let color = require('colors');
let fs = require('fs'); 
let path = require('path');
let readlineSync = require('readline-sync');
let sqlite3 = require('sqlite3').verbose();
let appName = process.argv[2]
let appDirectory = '';
let defaultFilesToRemove = [
    'App.tsx', 'App.test.tsx', 'index.css', 'logo.svg', 'App.css',
];

//path to the database
const dbPath = path.resolve(__dirname, './database/createReactAppSycade.db');

let resultConditions = [];
let stepConditions = [];
let files = [];
let packages = [];
let devPackages = [];

//open database
let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.error(err.message);
    }
    return console.log('Connected to the database.');
});

//mothod to call database async
db.allAsync = function (sql) {
    var that = this;
    return new Promise(function (resolve, reject) {
        that.all(sql, function (err, row) {
            if (err)
                reject(err);
            else
                resolve(row);
        });
    });
}

//run default create-react-app
const createReactApp = (commandsToRun) => {
    return new Promise(resolve => {
        try {
            shell.exec(commandsToRun.join(' '), () => {
                console.log(`Created react app with typescript\n`);
                resolve(true)
            })
        } catch (error) {
            console.log('Something went wrong while creating react app, try to run: "npm install -g create-react-app" before running "create-react-sycade-app"')
            resolve(false)
        }
    })
}

//install packages specified by user
const installPackages = async (packagesToInstall) => {
    return new Promise(resolve => {
        try {
            if (packagesToInstall.length > 0) {
                console.log(`installing packages: ${packagesToInstall.join(' ')}\n`);
                shell.exec(`npm install --save ` + packagesToInstall.join(' '));
                console.log('packages installed\n'.green);
            }
            resolve(true);
        } catch (error) {
            console.log(error + ''.red);
            resolve(false);
        }
    })
}

//install development packages specified by user
const installDevPackages = async (devPackagesToInstall) => {
    return new Promise(resolve => {
        try {
            if (devPackagesToInstall.length > 0) {
                console.log(`installing dev dependency packages: ${devPackagesToInstall.join(' ')}\n`);
                shell.exec(`npm install --save-dev ` + devPackagesToInstall.join(' '));
                console.log('packages installed\n'.green);
            }
            resolve(true);
        } catch (error) {
            console.log(error + ''.red);
            resolve(false);
        }
    })
}

//create custom project template
const createTemplate = async () => {
    return new Promise(resolve => {
        try {
            files.forEach(file => {
                //check if directory exists, if not create directory
                ensureDirectoryExistence(file.path);

                //if file is not empty, write to file
                if (file.contents != null && file.path.includes('.')) {
                    fs.writeFile(`${appDirectory}/src/${file.path}`, file.contents, function (err) {
                        if (err) {
                            console.log('something went wrong writing file: ' + file.path + ' error: ' + err);
                        }
                    })
                }
            });
            console.log('creating template succeeded');
            resolve(true);
        } catch (error) {
            console.log(error);
            resolve(false);
        }

    })
}

//delete files not needed from default create react app
const deleteUnnecessaryFiles = async () => {
    return new Promise(resolve => {
        try {
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

//check if directory exists, if not create directory
function ensureDirectoryExistence(filePath) {
    let dirname = path.dirname(`${appDirectory}/src/${filePath}`);
    if (fs.existsSync(dirname)) {
        return;
    }
    shell.mkdir('-p', dirname)
    return;
}

//walk through the steps
const Steps = (steps) => {
    const grouped = utils(steps, s => s.StepId);
    grouped.forEach(g => {
        const requiredForStep = g.filter(g => g.Required === 1 && g.ForStep === 1);

        let shouldContinue = true;

        requiredForStep.length >= 1 ?
            requiredForStep.forEach(r => {
                if (shouldContinue && stepConditions.length > 0) {
                    shouldContinue = stepConditions.includes(s => s.name === r.Name) >= 0 ? true : false;
                } else {
                    shouldContinue = false;
                }
            }) : shouldContinue = true;

        if (shouldContinue)
            if (readlineSync.keyInYNStrict(g[0].Question)) {
                g.forEach(g => {
                    const condition = { conditionId: g.ConditionId, name: g.Name, required: g.Required };
                    if (g.Required === 0)
                        g.ForStep === 1 ? stepConditions.push(condition) : resultConditions.push(condition.name);
                });
            }
    })
}

//get the files, packages and devpackages by their conditions
const createStepResults = (stepResults) => {
    const groupedFiles = utils(stepResults.filter(s => s.fileId !== null), s => s.fileId);
    const groupedPackages = utils(stepResults.filter(s => s.packageId && s.Dev === 0), s => s.Name);
    const groupedDevPackages = utils(stepResults.filter(s => s.packageId && s.Dev === 1), s => s.Name);

    groupedFiles.forEach(g => {
        const requiredConditions = g.filter(g => g.Required === 1).map(g => g.conditionName);
        const noRequiredConditions = g.filter(g => g.Required === 0).map(g => g.conditionName);
        const file = { path: g[0].Path, reqconditions: requiredConditions, noconditions: noRequiredConditions, contents: g[0].contents };
        if (file.reqconditions.every(rc => resultConditions.includes(rc)) && file.noconditions.every(nc => resultConditions.includes(nc) ? false : true)) {
            files.push(file);
        }
    });

    groupedPackages.forEach(g => {
        const requiredConditions = g.filter(g => g.Required === 1).map(g => g.conditionName);
        const noRequiredConditions = g.filter(g => g.Required === 0).map(g => g.conditionName);
        const package = { package: g[0].Name, reqconditions: requiredConditions, noconditions: noRequiredConditions };
        if (package.reqconditions.every(rc => resultConditions.includes(rc)) && package.noconditions.every(nc => resultConditions.includes(nc) ? false : true)) {
            packages.push(package.package);
        }
    });

    groupedDevPackages.forEach(g => {
        const requiredConditions = g.filter(g => g.Required === 1).map(g => g.conditionName);
        const noRequiredConditions = g.filter(g => g.Required === 0).map(g => g.conditionName);
        const package = { package: g[0].Name, reqconditions: requiredConditions, noconditions: noRequiredConditions };
        if (package.reqconditions.every(rc => resultConditions.includes(rc)) && package.noconditions.every(nc => resultConditions.includes(nc) ? false : true)) {
            devPackages.push(package.package);
        }
    });
}

//main method
const run = async () => {
    let commandsToRun = [];

    console.log('\nanswer the questions to navigate through the project setup\n');

    // make sure to have a application name
    if (appName === undefined) {
        appName = readlineSync.question('\nWhat is the name of the application?\n');
    }

    //add create-react-app to the npm commands needed to run
    if (appName !== undefined) {
        appDirectory = `${process.cwd()}/${appName.toLowerCase()}`;
        commandsToRun.push(`npx create-react-app ${appName.toLowerCase()} --typescript`);
    }

    //sql queries for getting the steps and de stepresults
    const getSteps =
        `SELECT 
        s.Id, 
        s.Position,
        s.Question, 
        sc.Id StepCondionId, 
        sc.ForStep,
        sc.StepId,
        sc.ConditionId,
        c.Name,
        c.Required
        FROM Steps s JOIN StepConditions sc on sc.StepId = s.Id LEFT JOIN Conditions c on sc.ConditionId = c.Id
        GROUP BY s.Id, StepCondionId, sc.ForStep`;

    const getStepResults =
        `SELECT 
                sr.Id,
                f.Id fileId,
                f.Path,
                f.Contents contents,
                p.Dev,
                p.Name,
                p.Id packageId,
                c.Name conditionName,
                c.Required
            FROM StepResults sr 
            LEFT JOIN Files f on sr.FileId = f.Id 
            LEFT JOIN Packages p on sr.PackageId = p.Id
            LEFT JOIN StepResultConditions src ON src.StepResultId = sr.Id 
            LEFT JOIN Conditions c ON src.ConditionId = c.Id`;

    //get the data
    var stepsdata = await db.allAsync(getSteps);
    var stepResultsdata = await db.allAsync(getStepResults);

    //walk through the steps
    Steps(stepsdata);

    //get the packages and files according to the steps
    createStepResults(stepResultsdata);

    //run npm commands
    let create = await createReactApp(commandsToRun);

    if (create === false) {
        console.log('\nSomething went wrong with create-react-app\n');
        return;
    } else if (create === true) {

        //move to created projecty folder
        shell.cd(`${appName}`);

        let installpackages = installPackages(packages);
        let installdevPackages = installDevPackages(devPackages);
        let deleteFiles = deleteUnnecessaryFiles();

        //install packages
        if (await installpackages === false) {
            console.log('\nSomething went wrong while installing packages\n'.red);
            return;
        }

        //install devpackages
        if (await installdevPackages === false) {
            console.log('\nSomething went wrong while installing dev packages\n'.red);
            return;
        }

        //delete files
        if (await deleteFiles === false) {
            console.log('\nSomething went wrong while creating removing unnessesary files template\n'.red);
            return;
        } else {
            //create custom template
            if (!await createTemplate()) {
                console.log('\nSomething went wrong while creating custom template\n'.red);
                return;
            }
            console.log('\nSucceeded, you can start programming\n'.green);
        }
    }
    db.close();
}
run();

