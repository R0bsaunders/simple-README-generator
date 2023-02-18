// function to generate markdown for README
function generateMarkdown(userData) {
  console.log(userData.title);

  return `
# ${userData.title}

## Table of Contents

- [Project Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributors](#Contributors)
- [Testing](#Testing)
- [Questions](#Questions)

## Description
${userData.description}

## Installation
${userData.installation}

## Usage
${userData.usage}

## License
${userData.license}

## Contributors
${userData.contributors}

## Testing
${userData.tests}

## Questions
You can get in touch by using the following:

### GitHub
**[${userData.github}](https://github.com/${userData.github})**

### Email
**[${userData.email}](${userData.email})**
`
;
}


export {generateMarkdown};
