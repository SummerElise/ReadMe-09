// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ['What is the title of of this project?', 'Write a brief but thorough description of your project.', 'List the steps required for installing your project.', 'Provide examples of your project with guidance on how to use it.', 'Provide instruction on how developers can contribute to this project.', 'Please explain and prove examples on how to run any tests that were written for your project.', 'Choose a license for your project.', 'What is your Github username?', 'What is your email address?'];

inquirer
.prompt([
    {
        type: 'input',
        message: questions[0],
        name: 'title',
    },
    {
        type: 'input',
        message: questions[1],
        name: 'description',
    },
    {
        type: 'input',
        message: questions[2],
        name: 'installation',
    },
    {
        type: 'input',
        message: questions[3],
        name: 'UsageInfo',
    },
    {
        type: 'input',
        message: questions[4],
        name: 'Contribution',
    },
    {
        type: 'input',
        message: questions[5],
        name: 'test',
    },
    {
        type: 'input',
        message: questions[6],
        name: 'license',
    },
    {
        type: 'input',
        message: questions[7],
        name: 'Github',
    },
    {
        type: 'input',
        message: questions[8],
        name: 'email',
    },
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
