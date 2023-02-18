import fs from 'node:fs'
import util from 'node:util'
// const path = require('path');
// const inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
import inquirer from 'inquirer';

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
          name: 'TableOfContents',
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
          type: 'list',
          name: 'license',
          message: 'License Type',
          choices:
            [
              'Apache 2.0 License',
              'Boost Software License 1.0',
              'BSD 3-Clause License',
              'BSD 2-Clause License',
              'CC0',
              'Attribution 4.0 International',
            ]

        },
        {
        type: 'input',
        name: 'Contributors',
        message: 'Who are the project contributors',
        }

      ]).then((data)=> {


        writeToFile("README.MD", data)
        const readableData = data

})

// function to write README file
function writeToFile(fileName, data) {
    const {Title, Description, TableOfContents, Installation, Usage, license, Contributors} = data

    console.log(Title, Description);
    fs.writeFile("README.md", JSON.stringify(data, null, "\t"), (err) =>err ? console.log(err):console.log("Success!"))
}

// function to initialize program
function init() {

}

// function call to initialize program
init();


const writeFileAsync = util.promisify(fs.writeFile);
