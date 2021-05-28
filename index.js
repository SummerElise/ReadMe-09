// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = ['What is the title of of this project?', 'Write a brief but thorough description of your project.', 'List the steps required for installing your project.', 'Provide examples of your project with guidance on how to use it.', 'Provide instruction on how developers can contribute to this project.', 'Please explain and prove examples on how to run any tests that were written for your project.', 'Choose a license for your project.', 'What is your Github username?', 'What is your email address?'];



const promptUser = () => {
    return inquirer.prompt([
    {
        type: 'input',
        message: questions[0],
        name: 'Title',
    },
    {
        type: 'input',
        message: questions[1],
        name: 'Description',
    },
    {
        type: 'input',
        message: questions[2],
        name: 'Installation',
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
        name: 'Test',
    },
    {
        type: 'input',
        message: questions[6],
        name: 'License',
    },
    {
        type: 'input',
        message: questions[7],
        name: 'Github',
    },
    {
        type: 'input',
        message: questions[8],
        name: 'Email',
    },
])
.then((answers) => {
    console.log(answers)
})
}
   
 
    fs.writeFile('README.MD',

`    

# Title 
${answers.title}
## Description
${answers.Description}
### Installation
${answers.Installation}
#### UsageInfo
${answers.UsageInfo}
##### Contribution guidelines
${answers.Contribution}
###### Tests
${answers.Test}
####### License
${answers.license}
######## Github username
${answers.Github}
######### Email
${answers.Email}
`
    )

function writeToFile(fileName, data) {}

function init() {}

init();