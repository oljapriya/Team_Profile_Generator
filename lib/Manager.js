const Employee = require ("./Employee");

class Manager extends Employee {
  constructor (name, id, email, office) {
    super(name, id, email)
    this.github = office;
  }

  getOffice() {
    return this.office
  };

  getRole() {
    return "Manager"
  };
};

//export
module.export = Manager; 