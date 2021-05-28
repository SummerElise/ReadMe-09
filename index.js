// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');
generateMarkdown('Practice');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of of this project?',
        name: 'Title',
    },
    {
        type: 'input',
        message: 'Write a brief but thorough description of your project.',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'List the steps required for installing your project.',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'Provide examples of your project with guidance on how to use it.',
        name: 'UsageInfo',
    },
    {
        type: 'input',
        message: 'Provide instruction on how developers can contribute to this project.',
        name: 'Contribution',
    },
    {
        type: 'input',
        message: 'Please explain and prove examples on how to run any tests that were written for your project.',
        name: 'Test',
    },
    {
        type: 'input',
        message: 'Choose a license for your project.',
        name: 'License',
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'Github',
    },
    {
        type: 'input',
        message:  'What is your email address?',
        name: 'Email',
    },
]
 
function writeToFile(fileName, data) {

const { Title, Description, Installation, UsageInfo, Contribution, Test, License, Github, Email } = data
console.log(data)

let README=
`${Title}

![${License}](https://img.shields.io/badge/license-${License}-blue)

## Description
${Description}
 ## Table of Contents

 *[Installation](##Installation)
 *[UsageInfo](##UsageInfo)
 *[Contribution](##Contribution)
 *[Test](##Tests)
 *[Questions](##Questions)

### Installation
${Installation}
#### UsageInfo
${UsageInfo}
##### Contribution guidelines
${Contribution}
###### Tests
${Test}
####### License
This project is licensed under the ${License} license.
####### Questions
If you have any questions, you can contactly me directly at ${Email}. View my other works at [${Github}]`    

    fs.writeFile(fileName, README, (err) => err ? 
      console.log(err) :
        console.log('created file'))
        }

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers)
        writeToFile("README.md", answers)     
    });
}

init();