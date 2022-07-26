// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./page-template");
const generateFile = require("./generateMarkdown");


const promptQuestions = ()=>{
    return inquirer.prompt([
{   type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: titleInput =>{
        if(titleInput){
            return true;
        }
        else{
            console.log('Please enter a title to continue!');
            return false;
        }
    }

},
{
    type: "input",
    name: "description",
    message: "Please provide a description of your project.",
    validate: description =>{
        if(description){
            return true;
        }else{
            console.log("Please enter a description to move on!");
            return false;
        }
    }
},
{
    type:"input",
    name: "installation",
    message: "Please provide the steps necessary for installation of your project.",
    validate: installProj=>{
        if(installProj){
            return true;
        }else{
            console.log("Please enter installation instruction to continue!");
            return false;
        }
    }
},
{
    type:"input",
    name: "usage",
    message: "Please provide instructions on how to use your project. Include screenshots if needed.",
    validate: useInput =>{
        if(useInput){
            return true;
        }else{
            console.log("Please enter instructions on usage to continue!");
            return false
        }
    }
    
},
{
    type:"input",
    name: "contribution",
    message: "Please provide information for other developers on how to contribute to your project.",
    validate: contribInput => {
        if(contribInput){
            return true;
        }else{
            console.log('Please provide contribution information to continue!');
            return false;
        }
    }
},
{
    type: "input",
    name: "email",
    message: "Please provide an email for where you can be contacted for further questions on your project.",
    validate: emailAdd => {
        if(emailAdd){
            return true;
        }else{
            console.log('Please enter an email address to continue!');
            return false;
        }
    }
},
{
    type:"input",
    name:"tests",
    message:"Please provide information on how to run tests for your project.",
    validate: testInfo => {
        if(testInfo){
            return true;
        }else{
            console.log('Please enter information for testing to continue!');
            return false;
        }
    }
},
{
    type: "input",
    name: "github",
    message:"What is your GitHub username?",
    validate: gitName => {
        if(gitName){
            return true;
        }else{
            console.log("Please enter a username to continue!");
            return false;
        }
    }

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
    message: "Please provide information on how one might contact you with further questions.",
    validate: questionInput => {
        if(questionInput){
            return true;
        }else{
            console.log("Please enter contact info for further questions to continue!");
            return false;
        }
    }
},
{
    type: "input",
    name: "link",
    message: "Please enter a link for your GitHub profile.",
    validate: gitLink => {
        if(gitLink){
            return true;
        }else{
            console.log("Please provide a link to continue!");
            return false;
        }
    }
},

    ])  
};
promptQuestions()
.then((data)=>{
    console.log(data);
    fs.writeFile("READMEGen.md", generateMarkdown(data), function(err){
if(err){
    console.log("ERROR")
}
else{
    console.log("README generated!")
}
    } )
    
});
