// function to generate markdown for README

function badgeSelector (license) {
  let licenseBadge = {
    Apache: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    Boost: "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  };

  return licenseBadge[license]

};

function generateMarkdown(userData) {
  console.log(userData.title);


  return `
${badgeSelector(userData.license)}
# ${userData.title}

## Table of Contents

- [Project Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Testing](#Testing)
- [Questions](#Questions)

## Description
${userData.description}

## Installation
${userData.installation}

## Usage
${userData.usage}

## Contributors
${userData.contributing}

## Testing
${userData.tests}

## Questions
You can get in touch by using the following:

### GitHub
**[${userData.github}](https://github.com/${userData.github})**

### Email
**[${userData.email}](${userData.email})**

## License
This theme is distributed under the ${userData.license} License.
`
;
}


export {generateMarkdown};
