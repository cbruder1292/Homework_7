function generateMarkdown(data) {
  console.log(data)
  return `
# ${data.projectTitle}

## Table of Contents:
${data.tableContents}

## Description:
${data.description}

## Installation:
${data.installation}

## Usage:
${data.Usage}

## License:
${data.License}

## Contributors:
${data.Contributors}

## Tests:
${data.Tests}

## Github Email:
${data.githubEmail}

## Photo url:
${data.photo}
`;
}

module.exports = generateMarkdown;
