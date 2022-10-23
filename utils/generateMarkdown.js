// Function that generates markdown for TheREADME.md
function generateMarkdown(data) {
  return `
   # ${data.title}
   
   [![License Badge](https://img.shields.io/badge/license-${data.license}-success?style=for-the-badge&color=blue)](https://choosealicense.com/licenses/${data.license.toLowerCase()}/)
   
   ## Description
   ${data.description}

   ## Table of Contents
   * [Installation](#installation)
   * [Usage](#usage)
   * [License](#license)
   * [Contributing](#contributing)
   * [Tests](#tests)
   * [Questions](#questions)
    
   ## Installation
   ${data.installation}

   ## Usage
   ${data.usage}

   ## License
   [${data.license}](https://choosealicense.com/licenses/${data.license.toLowerCase()}/)
   
   ## Test
   ${data.test}

   ## Contributors
   ${data.contributors}

   ## Questions
   For any additional questions, you can contact me at:

     - GitHub: [${data.username}](https://github.com/${data.username})
     - Email: [${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
