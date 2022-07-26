// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/page-template");
const generatePage = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const promptQuestions = ()=>{
    return inquirer.prompt([
{   type: "input",
    name: "title",
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
    name: "contribution",
    message: "Please provide guidelines for other developers on how to contribute to your project."
},
{
    type: "input",
    name: "email",
    message: "Please provide an email for where you can be contacted for further questions on your project. "
},
{
    type:"input",
    name:"tests",
    message:"Please provide information on how to run tests for your project."
},
{
    type: "input",
    name: "github",
    message:"What is vour GitHubusername?"
},
{
    type: "list",
    name: "license",
    message: "Please choose a license for your project.",
    choices: ['MIT', 'ISC', 'Apache 2.0', 'none']
},
{
    type: "input",
    name: "questions",
    message: "Please provide information on how one might contact you with further questions."
},
{
    type: "input",
    name: "link",
    message: "Please enter a link for your GitHub profile."
},

    ])  
};
promptQuestions().
then((data)=>{
    console.log(data);
    fs.writeFile("READMEGen.md", generateMarkdown(data), function(err){
if(err){
    console.log("ERROR")
}
else{
    console.log("readme generated!")
}
    } )
    
})
