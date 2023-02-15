// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./generateMarkdown.js')
const chalk = require("chalk");

// TODO: Create an array of questions for user input
const questions = [

    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        default: "README Generator",

    },
    {
        type: "input",
        name: "description",
        message: "Provide a short description explaining the what, why, and how of your project.",
        default: "When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions—this last part increases the likelihood that other developers will contribute to the success of the project.",

    },
    {
        type: "input",
        name: "installation",
        message: "What needs to be installed for the application to work?",
        default: "/Users/dhruvinpatel/bootcamp/potential-enigma/Screen Shot 2023-02-02 at 10.58.25 AM.png",

    },
    {
        type: "input",
        name: "usage",
        message: "Describe the methods used to accomplish the acceptance criteria along with any example of end products",
        default: "The following methods were used:",

    },
    {
        type: "list",
        name: "license",
        message: "Any Licenses?",
        choices: ["artistic-2.0", "cc-by-4.0", "MIT", "agpl-3.0"],

    },
    {
        type: "input",
        name: "contributors",
        message: "List the Names of the contributors to your project here:",
        default: "Steve Jobs",
    },

];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname,fileName),data)
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then ((data) =>{
        console.log(typeof data)
        writeToFile("./utils/README.md",generateMarkdown({...data}))
    })
}

// Function call to initialize app
init();
