// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let license = data.license;
  let badge;
    if (!data.licenseConfirm){
      return '';
    } else {
      return badge = `![License](https://img.shields.io/badge/License-${license}-yellow.svg)`;
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license.licenseConfirm){
    return '';
  } 
  return `
  ## License
  ${license.license}
  `;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  # Description
  ${data.description}

  # Table of Contents
  * [Installation] (#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  To get started, run the following command: 
  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribute}
  ${renderLicenseSection(data)}
  ${renderLicenseBadge(data)}

  ## Questions
  Please reach out to [${data.username}](${data.github}) or ${data.email} for any questions.
`;
}
module.exports = generateMarkdown;
