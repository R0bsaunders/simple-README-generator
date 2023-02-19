import fs from 'node:fs'
import {generateMarkdown} from "./utils/generateMarkdown.js";
import inquirer from 'inquirer';
import {choices} from "./utils/choices.js"

// function call to initialize program
init();

// function to initialize program
function init() {
  
  inquirer.prompt(choices).then((answers)=> {

    writeToFile("README.md", generateMarkdown(answers))

  });

};

// function to write README file
function writeToFile(fileName, data) {

  fs.writeFile("README.md", data, (err) =>err ? console.log(err):console.log("Success! You have a FANTASTIC readme file!"))

};