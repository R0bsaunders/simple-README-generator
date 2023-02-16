const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();


const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>

  inquirer.prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is the title?',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'What is the description of your project?',
    },
    {
      type: 'input',
      name: 'Table of contents',
      message: 'Yes or No?',
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'What are the installation instructions?',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'What are the usage instructions?',
    },
    {
      type: 'input',
      name: 'license',
      message: 'License Type',
    },
    {
        type: 'input',
        name: 'Contributors',
        message: 'Who are the project contributors',
      },
  ]);