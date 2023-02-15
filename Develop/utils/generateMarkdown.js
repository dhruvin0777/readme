// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blueviolet.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "artistic-2.0 License") {
    return "(https://opensource.org/licenses/Artistic-2.0)";
  } else if (license === "cc-by-4.0 License") {
    return "(https://opensource.org/node/215)";
  } else if (license === "The MIT License") {
    return "(https://opensource.org/licenses/MIT)";
  } else if (license === "agpl-3.0 License") {
    return "(https://opensource.org/licenses/AGPL-3.0)";
  } else if (license === "") {
    return "";
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return "* [License](#license)"
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents

  * [Project-Description](#description)

  * [Project-Installations](#installation)

  * [Project-Usage](#usage)

  ${renderLicenseLink()} 
  
  * [Contributions-factors/guidelines](#contributions)

  * [Testing](#tests)

  * [Questions](#questions)

  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.useage}
  ## Test Instructions 
  ${data.license}
  ## Contribution Guidelines
  ${data.contributing}
  ## Questions
  - Github: ${data.Github}
  - Email: ${data.email}
  `;
}

module.exports = generateMarkdown;
