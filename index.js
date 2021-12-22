// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
var readmeData = {}
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'Enter Your GitHub Username',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please Enter Your GitHub Username');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter Link to GitHub Profile',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please Enter Link to Your GitHub Profile');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter Your Email Address',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please Enter Your Email Address');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'Enter Your Project Name',
        validate: projectInput => {
            if (projectInput) {
                return true;
            } else {
                console.log('Please Enter Your Project Name');
                return false
            }
        }
    }       
        type: 'input',
        name: 'username',
        message: 'Enter Your GitHub Username',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please Enter Your GitHub Username');
                return false
            }
        }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return FileSystem.writeToFile(fileName, data, err => {
        if (err) throw err;
        console.log('README created');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile('./README.md', generateMarkdown(data));
    });
}

// Function call to initialize app
init();
