const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

function newTeamMember() {
    inquirer.prompt ([{
        type: 'input',
        message: 'Enter team member name',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Enter team member ID',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Enter team member email address',
        name: 'email',
    },
    {
        type: 'list',
        message: "What is the team member's role?",
        choices: [
            Manager,
            Engineer,
            Intern,
        ],
        name: 'role',
    }])
    .then(function({name, id, email, role}) {
        let additionalInfo = "";
        if (role === 'Manager') {
            additionalInfo = 'office number';
        } else if (role === 'Engineer') {
            additionalInfo = 'GitHub username';
        } else if (role === 'Intern') {
            additionalInfo = 'school name';
        }
        inquirer.prompt([{
                type: 'input',
                message: `Please enter the team member's ${additionalInfo}`,
                name: `additionalInfo`
            },
            {
                type: 'list',
                message: `Would you like to add more team members?`,
                choices:[
                    yes,
                    no,
                ],
                name: `more`
            },
        ])
        .then(function({additionalInfo, more}) {
            let member = "";
            if (role === `Manager`) {
                member = new Manager(name, id, email, additionalInfo)
            } else if (role === 'Engineer') {
                member = new Engineer(name, id, email, additionalInfo)
            } else if (role === 'Intern') {
                member = new Intern(name, id, email, additionalInfo)
            };
        });
    });
}
//intern’s name, ID, email, and school
//engineer’s name, ID, email, and GitHub username
//manager’s name, employee ID, email address, and office number