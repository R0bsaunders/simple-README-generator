import fs from 'node:fs'
import util from 'node:util'
import {generateMarkdown} from "./utils/generateMarkdown.js";


// array of questions for user
import inquirer from 'inquirer';

 inquirer.prompt([
        {
          type: 'input',
          name: 'title',
          message: 'What is the title?',
          validate: function(inputTitle) {
            let title = inputTitle;

            return (!title ? 'Please enter a title' : true);
          }
        },
        {
          type: 'input',
          name: 'description',
          message: 'What is the description of your project?',
          validate: function(inputDescription) {
            let description = inputDescription;

            return (!description ? 'Please enter a description' : true);
          }
        },
        {
          type: 'input',
          name: 'installation',
          message: 'What are the installation instructions?',
          validate: function(inputInstallation) {
            let installation = inputInstallation;

            return (!installation ? 'Please enter installation instructions' : true);
          }
        },
        {
          type: 'input',
          name: 'usage',
          message: 'What are the usage instructions?',
          validate: function(inputUsage) {
            let usage = inputUsage;

            return (!usage ? 'Please enter installation instructions' : true);
          }
        },
        {
          type: 'list',
          name: 'license',
          message: 'Select a license Type',
          choices:
            [
              'Apache',
              'Boost',
              'MIT'
            ]
        },
        {
        type: 'input',
        name: 'contributing',
        message: 'Who are the project contributors',
        validate: function(inputContributors) {
          let contributors = inputContributors;

          return (!contributors ? 'Please enter installation instructions' : true);
        }
        },
        {
          type: 'input',
          name: 'tests',
          message: 'What tests have been run?',
          validate: function(inputTests) {
            let tests = inputTests;
  
            return (!tests ? 'Please enter installation instructions' : true);
          }
          },
          {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            validate: function(inputGithub) {
              let github = inputGithub;
    
              return (!github ? 'Please enter your GitHub username' : true);
            }
            },
            {
              type: 'input',
              name: 'email',
              message: 'What is your email address?',
              validate: function(inputEmail) {
                let email = inputEmail;
      
                return (!email ? 'Please enter your GitHub username' : true);
              }
              }
      ]).then((answers)=> {

        writeToFile("README.md", generateMarkdown(answers))

})

// function to write README file
function writeToFile(fileName, data) {


    fs.writeFile("README.md", data, (err) =>err ? console.log(err):console.log("Success! You have a FANTASTIC readme file!"))
}

// function to initialize program
function init() {

}

// function call to initialize program
init();