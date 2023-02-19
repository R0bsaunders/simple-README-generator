// Function to select correct license badge
function badgeSelector (license) {
  let licenseBadge = {
    Apache: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    Boost: "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  };

  return licenseBadge[license]
};

// function to generate markdown for README
function generateMarkdown(usersAnswers) {

  return `
${badgeSelector(usersAnswers.license)}
# ${usersAnswers.title}

## Table of Contents

- [Project Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Testing](#Testing)
- [Questions](#Questions)

## Description
${usersAnswers.description}

## Installation
${usersAnswers.installation}

## Usage
${usersAnswers.usage}

## Contributors
${usersAnswers.contributing}

## Testing
${usersAnswers.tests}

## Questions
You can get in touch by using the following:

### GitHub
**[${usersAnswers.github}](https://github.com/${usersAnswers.github})**

### Email
**[${usersAnswers.email}](${usersAnswers.email})**

## License
This code is distributed under the ${usersAnswers.license} License.
`;
};

// Make available to rest of the files
export {generateMarkdown};