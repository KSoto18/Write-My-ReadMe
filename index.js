// Packages needed for this application:
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Questions for user input
const questions = 
         [ {
                type: 'input',
                message: 'Whats the title of your project?',
                name: 'title',
            },

            {
                type: 'input',
                message: 'Whats the description?',
                name: 'description',
            },

            {
                type: 'input',
                message: 'Whats the installation instructions?',
                name: 'installation',
            },

            {
                type: 'input',
                message: 'What is this used for?',
                name: 'usage',
            },

            {
                type: 'input',
                message: 'Who contributed to your project?',
                name: 'contributors',
            },

            {
                type: 'list',
                message: 'Choose a license for your project:',
                name: 'license',
                choices: ['MIT', 'ISC', 'Mozilla', 'Eclipse', 'None']
            },

            {
                type: 'input',
                message: 'What is your GitHub username?',
                name: 'username',
            },

            {
                type: 'input',
                message: 'What is your email?',
                name: 'email',
            },

        ];
       

// Function to write README file
function writeToFile(data) {
    fs.writeFile(`TheREADME.md`, data, (err) =>
    err ? console.log(err) : console.log('You got it!')
    );
 }

// Function to initialize app
function init() {
    inquirer
     .prompt(questions)
     .then((data) => writeToFile(generateMarkdown(data)));
 }

// Function call to initialize app
init();
