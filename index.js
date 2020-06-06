var inquirer = require("inquirer");
var fs = require('fs');
var generateMarkdown = require("./utils/generateMarkdown.js");


const questions = [{
    type: "input",
    name: "projectTitle",
    message: "What is the project title?"
    },
    {
      type: "input",
      name:"description",
      message: "Please describe your project:"
    },
    {
      type: "input",
      name:"tableContents",
      message: "Create a table of contents:"
    },
    {
      type: "input",
      name:"installation",
      message: "How does a user install your project?"
    },
    {
      type: "input",
      name:"Usage",
      message: "What is this project used for?"
    },
    {
      type: "input",
      name:"License",
      message: "Please provide the license for this project:"
    },
    {
      type: "input",
      name:"Contributors",
      message: "Who contributed to this project?"
    },
    {
      type: "input",
      name:"Tests",
      message: "How can a user test this project for quality?"
    },
    {
      type: "input",
      name:"githubEmail",
      message: "Please enter your Github email:"
    },
    {
      type: "input",
      name:"photo",
      message: "Please provide your photo URL:"
    },
];

function writeToFile(fileName, data) {
    let input = generateMarkdown(data);
    fs.writeFile(fileName, input, function(err) {

        if (err) {
          return console.log(err);
        }
      
        console.log("Success!");
      
      })


}

function init() {
inquirer.prompt(questions).then(function(responses){
        writeToFile("Readme.md", responses);
    })

}

init();
