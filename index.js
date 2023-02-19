// Importing File System
import fs from 'node:fs';

// Importing the function required to generate markdown
import {generateMarkdown} from "./utils/generateMarkdown.js";

// Importing inquirer package
import inquirer from 'inquirer';

// Importing the list of questions from external file
import {choices} from "./utils/choices.js";

// function call to initialize program
init();

// function to initialize program
function init() {

  // close inquirer input if user press "escape" key
  process.stdin.on('keypress', (_, key) => {
    if (key.name === "escape") {
      exit();
    };
  });

  inquirer.prompt(choices)
  
  .then((answers)=> {

    writeToFile("README.md", generateMarkdown(answers));

  });
};

// function to write README file
function writeToFile(fileName, data) {

  fs.writeFile(`./assets/${fileName}`, data, (err) =>err ? console.log(err) : console.log("Success! You have a FANTASTIC README file!"));

};


// Exit the inquirer prompt
function exit () {
  prompt.ui.close();
};