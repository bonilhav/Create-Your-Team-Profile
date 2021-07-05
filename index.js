const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const employees = [];

function newTeamMember() {
    inquirer.prompt([{
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
        .then(function ({ name, id, email, role }) {
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
                choices: [
                    yes,
                    no,
                ],
                name: `more`
            },
            ])
                .then(function ({ additionalInfo, more }) {
                    let member = "";
                    if (role === `Manager`) {
                        member = new Manager(name, id, email, additionalInfo)
                    } else if (role === 'Engineer') {
                        member = new Engineer(name, id, email, additionalInfo)
                    } else if (role === 'Intern') {
                        member = new Intern(name, id, email, additionalInfo)
                    }
                    employees.push(member);
                    addMembers(member)
                        .then(function () {
                            if (more === `yes`) {
                                newTeamMember();
                            }
                        });
                });
        });
}
//intern’s name, ID, email, and school
//engineer’s name, ID, email, and GitHub username
//manager’s name, employee ID, email address, and office number

function addMembers() {
    return new Promise(function (resolve, reject) {
        const name = member.getName();
        const id = member.getId();
        const email = member.getEmail();
        const role = member.getRole();

        const membersList = $('.row')

        if (role === `Manager`) {
            const officeNumber = member.getOfficeNumber ();
            membersList.append(`
            <div class="col mb-3">
                <div class="card " style="width: 19rem;">
                    <div class="card-body text-white bg-info">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text"><i class="fas fa-user-tie" style="font-size: 19px"></i> ${role}</p>
                    </div>
                    <div class="card-body bg-light">
                        <ul class="list-group list-group-flush border">
                            <li class="list-group-item">ID: ${id}</li>
                            <li class="list-group-item">Email: <a href="${email}">${email}</a></li>
                            <li class="list-group-item">Office number: ${officeNumber}</li>
                        </ul>
                    </div>
                </div>
            </div>
            `)
        } else if (role === `Engineer`) {
            const gitHub = member.getGitHub ();
            membersList.append(`
            <div class="col mb-3">
                <div class="card " style="width: 19rem;">
                    <div class="card-body text-white bg-info">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text"><i class="fas fa-user-cog" style="font-size: 19px"></i> ${role}</p>
                    </div>
                    <div class="card-body bg-light">
                        <ul class="list-group list-group-flush border">
                            <li class="list-group-item">ID: ${id}</li>
                            <li class="list-group-item">Email: <a href="${email}">${email}</a></li>
                            <li class="list-group-item">GitHub username: ${gitHub}</li>
                        </ul>
                    </div>
                </div>
            </div>
            `)
        } else if (role === `Intern`) {
            const school = member.getSchool ();
            membersList.append(`
            <div class="col mb-3">
                <div class="card " style="width: 19rem;">
                    <div class="card-body text-white bg-info">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text"><i class="fas fa-user-graduate" style="font-size: 19px"></i> ${role}</p>
                    </div>
                    <div class="card-body bg-light">
                        <ul class="list-group list-group-flush border">
                            <li class="list-group-item">ID: ${id}</li>
                            <li class="list-group-item">Email: <a href="${email}">${email}</a></li>
                            <li class="list-group-item">School: ${school}</li>
                        </ul>
                    </div>
                </div>
            </div>
            `)
        }
    })
}