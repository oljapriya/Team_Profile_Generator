const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require('fs');

const output_dir = path.resolve(__dirname, "output");
const outputPath = path.join(output_dir, "team.html");

const render = require("./lib/htmlRenderer");
const { POINT_CONVERSION_COMPRESSED } = require("constants");

const teamMembers = [];
// question arrays
//Engineer
const managerQuestions = [
  {
    type: 'input',
    message: 'What is your name?',
    name: 'name'
  },
  {
    type: 'input',
    message: 'What is your ID?',
    name: 'id'
  },
  {
    type: 'input',
    message: 'What is your email?',
    name: 'email'
  },
  {
    type: 'input',
    message: 'What is your office number?',
    name: 'office'
  },
];

// engineer
const engineerQuestions = [
  {
    type: 'input',
    message: "What is your engineer's name?",
    name: 'name'
  },
  {
    type: 'input',
    message: "What is your engineer's ID?",
    name: 'id'
  },
  {
    type: 'input',
    message: "What is your engineer's email?",
    name: 'email'
  },
  {
    type: 'input',
    message: "What is your engineer's GitHub username?",
    name: 'github'
  },
];

//intern
const internQuestions = [
  {
    type: 'input',
    message: "What is your intern's name?",
    name: 'name'
  },
  {
    type: 'input',
    message: "What is your intern's ID?",
    name: 'id'
  },
  {
    type: 'input',
    message: "What is your intern's email?",
    name: 'email'
  },
  {
    type: 'input',
    message: "What is your intern's school?",
    name: 'school'
  },
];

const teamAdd =
{
  type: "list",
  message: "What type of team member would you like to add?",
  name: "team",
  choices: ["Engineer", "Intern", "None"]
}
//manager
function createManager() {
  inquirer.prompt(managerQuestions).then(response => {
    const newManager = new Manager(response.name, response.id, response.email, response.office)
    teamMembers.push(newManager)
    createTeam()
  })
}
function createEngineer() {
  inquirer.prompt(engineerQuestions).then(response => {
    const newEngineer = new Engineer(response.name, response.id, response.email, response.github)
    teamMembers.push(newEngineer)
    createTeam()
  })
};
//Intern
function createIntern() {
  inquirer.prompt(internQuestions).then(response => {
    const newIntern = new Intern(response.name, response.id, response.email, response.school)
    teamMembers.push(newIntern)
    createTeam()
  })
};

//create team or not
function createTeam() {
  inquirer.prompt(teamAdd).then(response => {
    if (response.team === "Engineer") {
      createEngineer();
    } else if (response.team === "Intern") {
      createIntern();
    } else if (response.team === "None") {
      const finalHTML = render(teamMembers)
      fs.writeFile("./output/team.html", finalHTML, function (err) {
        if (err) {
          return console.log(err);
        }
        console.log("File written!");
      });
    }
  })
};
createManager();


