const path = require("path");
const fs = require("fs");
const Employee = require("./Employee");

const templateDir = path.resolve (__dirname, "../templates");

const render = employee => {
  const html = [];

  html.push(...employees
    .filter(employee => employee.getRole() === "Manager")
    .map(engineer => renderEngineer(engineer))
  );
  html.push(...employees
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => renderManager(engineer))
  );
  html.push(...employees
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => renderIntern(intern))
  );

  return renderMain(html.join(""));

};

const renderManager = engineer => {
  let template = fs.readFileSync(path.resolve(templateDir, "engineer.html"), "utf8")
  template = replacePlaceholders(template, "name", engineer.getName());
  template = replacePlaceholders(template, "role", engineer.getRole());
  template = replacePlaceholders(template, "email", engineer.getEmail());
  template = replacePlaceholders(template, "id", engineer.getId());
  template = replacePlaceholders(template, "officeNumber", engineer.geOffice());
  return template;
};

const renderEngineer = engineer => {
  let template = fs.readFileSync(path.resolve(templateDir, "engineer.html"), "utf8")
  template = replacePlaceholders(template, "name", engineer.getName());
  template = replacePlaceholders(template, "role", engineer.getRole());
  template = replacePlaceholders(template, "email", engineer.getEmail());
  template = replacePlaceholders(template, "id", engineer.getId());
  template = replacePlaceholders(template, "github", engineer.getGitgub());
  return template;
};

const renderIntern = intern => {
  let template = fs.readFileSync(path.resolve(templateDir, "intern.html"), "utf8")
  template = replacePlaceholders(template, "name", intern.getName());
  template = replacePlaceholders(template, "role", intern.getRole());
  template = replacePlaceholders(template, "email", intern.getEmail());
  template = replacePlaceholders(template, "id", intern.getId());
  template = replacePlaceholders(template, "school", intern.getSchool());
  return template;
};

const renderMain = html => {
  const template = fs.readFileSync(path.resolve(templateDir, "main.html"), utf8);
  return replacePlaceholders (template, "team", html);
};

const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + "}}", "gm");
  return template.replace(pattern, value);
};
module.export = render; 
