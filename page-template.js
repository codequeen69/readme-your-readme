module.exports = generateMarkdown

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "none"){
    return "";
  }else if (license === "MIT"){
    return `
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
`
  }else if(license === "ISC"){
    return`
    [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
`
}else if(license === "Apache 2.0"){
  return`
  [![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
`
}

};

function renderLicenseLink(license) {
  if(license === "none"){
    return"";
  
  }
  else{
  return `* [License](#license)`
  }  
};

 //TODO: Create a function that returns the license section of README
//If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "none"){
    return"";
  }
else{
  return `## License
  This project is licensed under: ${license}
  `
}
 };

function generateMarkdown(data) {
    
    return `# ${data.title} 
## ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}

  ## Table of Contents:
* [Installation](#installation)
* [Usage](#usage)

 ${renderLicenseLink(data.license)}
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}

  ${data.email}

  GitHub profile for ${data.github}: ${data.link}
  `;
  };