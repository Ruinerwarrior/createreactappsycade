#!/usr/bin/env node

//tool for adding steps

//NOT FINISHED!
let shell = require('shelljs');
let colors = require('colors');
let fs = require('fs'); //fs already comes included with node.
let templates = require('./templates/templates.js');
let path = require('path');
let readlineSync = require('readline-sync');

const run = async () => {

  if(readlineSync.keyInYNStrict('\nDo you want to add a step?')) {
    console.log('The step question is the yes/no question asked to the user when running create-react-app-sycade\n');
    let question = readlineSync.question('\nWhat is the step question?\n');
    console.log(question + '\n\n')
    console.log('The conditions are the conditions on what the template is builded, all directories/files are added dependend if their conditions are met\n');
    console.log('Add conditions divided by a space, per example:\n');
    console.log('redux bulma\n');
    console.log('This creates a template with all files and directories that need the condition "redux" or "bulma"\n');
    let conditions = readlineSync.question('\nWhat are the conditions\n').split(' ');
    
  }
}

run();