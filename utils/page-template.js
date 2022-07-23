module.exports = generateMarkdown;

const {renderLicenseSection, renderLicenseLink, renderLicenseSection}= require("../utils/generateMarkdown.js")
// TODO: Create a function to generate markdown for README
function generateMarkdown(title, description, usage, tests, contribution, questions) {
    
    return `# ${data.title} ## ${data.badge}
  
    ## Description
  ${data.description}
    ## Table of Contents
    *[Installation](#installation)
    *[Usage](#usage)
    *[License](#license)
    *[Contribution](#contribution)
    *[Tests](#tests)
    *[Questions](#questions)
  
    ## Installation instructions:
  ${data.installation}
    ## How to Use:
  ${data.usage}
    ## License
  ${data.license}
    ## Contribution
  ${data.contribution}
    ## Testing Instruction
  ${data.test}
    ## Questions
  ${data.questions}
  ${data.email}
  ${data.github}
  `;
  }