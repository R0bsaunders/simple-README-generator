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
          validate: function(input) {
            let titleEntry = input;
            if (!titleEntry) {
              return 'Please enter a title';

            } else {
              return true;

            };
          };
        },
        {
          type: 'input',
          name: 'Description',
          message: 'What is the description of your project?',
        },
        {
          type: 'confirm',
          name: 'tableOfContents',
          message: 'Do you want a table of contents?',
        },
        {
          type: 'input',
          name: 'installation',
          message: 'What are the installation instructions?',
        },
        {
          type: 'input',
          name: 'usage',
          message: 'What are the usage instructions?',
        },
        {
          type: 'list',
          name: 'license',
          message: 'Select a license Type',
          choices:
            [
              'Apache 2.0 License',
              'Boost Software License 1.0',
              'BSD 3-Clause License',
              'The MIT License',
              'BSD 2-Clause License',
              'CC0',
              'Attribution 4.0 International'
            ]

        },
        {
        type: 'input',
        name: 'Contributors',
        message: 'Who are the project contributors',
        }

      ]).then((answers)=> {


        // writeToFile("README.MD", data)
        const readableData = answers
        console.log(answers);

})

// function to write README file
function writeToFile(fileName, answers) {
    const {Title, Description, TableOfContents, Installation, Usage, license, Contributors} = answers

    console.log(Title, Description);
    fs.writeFile("README.md", JSON.stringify(answers, null, "\t"), (err) =>err ? console.log(err):console.log("Success!"))
}

// function to initialize program
function init() {

}

// function call to initialize program
init();


const writeFileAsync = util.promisify(fs.writeFile);
