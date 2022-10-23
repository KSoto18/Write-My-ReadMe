// Packages needed for this application:
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
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
                message: 'Whats the instalation instructions?',
                name: 'installation',
            },

            {
                type: 'input',
                message: 'What is this used for?',
                name: 'usage',
            },

            {
                type: 'input',
                message: 'Who contributed?',
                name: 'contributing',
            },

            {
                type: 'list',
                message: 'Choose a license for your project:',
                name: 'license',
                choices: ['MIT', 'Apache', 'BSD 2', 'BDS 3', 'GPL', 'LGPL', 'Mozilla', 'Eclipse', 'None']
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
       

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile(`TheREADME.md`, data, (err) =>
    err ? console.log(err) : console.log('You got it!')
    );
 }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
