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
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
