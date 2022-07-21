// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const promptQuestions = ()=>{
    return inquirer.prompt([
{   type: "input",
    name: "project title",
    message: "What is the title of your project?"

},
{
    type: "input",
    name: "description",
    message: "Please provide a description of your project."
},
{
    type:"input",
    name: "installation",
    message: "Please provide the steps necessary for installation of your project."
},
{
    type:"input",
    name: "usage",
    message: "Please provide instructions on how to use your project. Include screenshots if needed."
},
{
    type:"input",
    name: "Contributing",
    message: "Please list all contributors for your project."
},
{
    type: "input",
    name: "email/questions",
    message: "Please provide an email for where you can be contacted for further questions on your project. "
},
{
    type:"input",
    name:"tests",
    message:"Please provide information on how to run tests for your project."
},
{
    type: "input",
    name: "username",
    message:"What is vour username?"
},
{
    type: "checkbox",
    name: "license",
    message: "Please choose a license for your project.",
    choices: ['Apache License 2.0', 'MIT', 'ISC', 'GNU GPLv3']
},
{
    type: "input",
    name: "link",
    message: "Please enter a link for your GitHub profile."
},

    ])  
};
promptQuestions();
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
