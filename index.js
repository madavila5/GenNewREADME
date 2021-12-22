// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js")
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
    },
    {     
        type: 'input',
        name: 'description',
        message: 'Enter a Project Description',
        validate: descripInput => {
            if (descripInput) {
                return true;
            } else {
                console.log('Please Enter Project Description');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter Installation Instructions',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter Your Instructions and Examples',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please Enter Your Instructions and Examples');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Enter Contributions to Application',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please Enter Contributions to Application');
                return false
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Select License',
        choices: ["MIT", "Apache2.0", "BSD3", "GPL3.0"],
        when: ({licenceConfirm}) => {
            if (licenceConfirm) {
                return true;
            } else {
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeToFile(fileName, data, err => {
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
