//Init. of employee class with properties
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        let role = 'Employee';
    }
    // Adding methods to the constructor
    getName() {
        return `${this.name}` ;
    }
    getId() {
        return `${this.id}`;
    }
    getEmail() {
        return `${this.email}`
    }

}

// Creating Manager class from the parent
class Manager extends Employee {
    constructor(officeNumber) {
        // Chain constructor with super
        super(name, id, email);

        // Add a new property
        this.officeNumber = officeNumber;

        //change role to manager
        let role = 'Manager';
        
    }
}

// Creating Engineer class from the parent
class Engineer extends Employee {
    constructor(username, url) {
        // Chain constructor with super
        super(name, id, email);

        // Add property username and url for Github
        this.username = username;
        this.url = url

        //change role to Engineer
        let role = 'Engineer';
        
    }
}

// Creating Engineer class from the parent
class Intern extends Employee {
    constructor(school) {
        // Chain constructor with super
        super(name, id, email);

        // Add property username and url for Github
        this.school = school;

        //change role to Engineer
        let role = 'Intern';

        //new method for getting school info
        getSchool = (school) => this.school;
        
    }
}
module.exports = {
    Employee: Employee,
    Manager: Manager,
    Engineer: Engineer,
    Intern: Intern
}