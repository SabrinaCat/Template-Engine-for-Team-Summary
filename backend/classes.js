//Init. of employee class with properties
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
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
    getRole(){
        return `Employee`
        }
}

// Creating a new class from the parent
class Manager extends Employee {
    constructor(officeNumber) {
        // Chain constructor with super
        super(name, id, email);

        // Add a new property
        this.officeNumber = officeNumber;

        //change role to manager
        let role = () => `Manager`;
        
    }
}
