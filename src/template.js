const generateTeam = employees => {

    const generateManager = manager => {
        return `
        <div class="col mb-3">
            <div class="card " style="width: 19rem;">
                <div class="card-body text-white bg-info">
                    <h5 class="card-title">${manager.getName()}</h5>
                    <p class="card-text"><i class="fas fa-user-tie" style="font-size: 19px"></i> ${manager.getRole()}</p>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush border">
                        <li class="list-group-item">ID: ${manager.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                        <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>
        </div>`;
    };

    const generateEngineer = engineer => {
        return `
        <div class="col mb-3">
            <div class="card " style="width: 19rem;">
                <div class="card-body text-white bg-info">
                    <h5 class="card-title">${engineer.getName()}</h5>
                    <p class="card-text"><i class="fas fa-user-cog" style="font-size: 19px"></i> ${engineer.getRole()}</p>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush border">
                        <li class="list-group-item">ID: ${engineer.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a></li>
                    </ul>
                </div>
            </div>
        </div>`;
    };

    const generateIntern = intern => {
        return `
        <div class="col mb-3">
            <div class="card " style="width: 19rem;">
                <div class="card-body text-white bg-info">
                    <h5 class="card-title">${intern.getName()}</h5>
                    <p class="card-text"><i class="fas fa-user-graduate" style="font-size: 19px"></i> ${intern.getRole()}</p>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush border">
                        <li class="list-group-item">ID: ${intern.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>
        </div>`;
    };
    const html = [];

    html.push(
        employees
            .filter((employee) => employee.getRole() === "Manager")
            .map((manager) => generateManager(manager))
    );
    html.push(
        employees
            .filter((employee) => employee.getRole() === "Engineer")
            .map((engineer) => generateEngineer(engineer))
            .join("")
    );
    html.push(
        employees
            .filter((employee) => employee.getRole() === "Intern")
            .map((intern) => generateIntern(intern))
            .join("")
    );
    return html.join("");
};

module.exports = employees => {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <title>Team Roster</title>
    </head>

    <body>
        <div class="jumbotron text-center bg-primary text-white">
            <h1 class="display-4 font-weight-bold">My Team</h1>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                    ${generateTeam(employees)}
                </div>
            </div>
        </div>
    <script src="https://kit.fontawesome.com/bf2e3f60e1.js" crossorigin="anonymous"></script>
</body>

</html>`;
};
