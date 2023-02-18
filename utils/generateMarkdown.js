// function to generate markdown for README
function generateMarkdown(userData) {
  console.log(userData.title);
  return `
  # ${userData.title} \n
  ${userData.description} \n
  
`;

}


export {generateMarkdown};
