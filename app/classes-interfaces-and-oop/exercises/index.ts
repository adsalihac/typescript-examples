// Define a class called Logger that takes the name of a file
// in its constructor and provides a method for writing messages to that file.
// Don’t worry about the actual file I/O operations. Just define the class with the right members.

class Logger {
  constructor(private fileName: string) {}

  log(message: string) {
    console.log(message);
    console.log(this.fileName);
  }
}

// Given the Person class below, create a getter for getting the full name of a person.

class Person {
  constructor(private firstName: string, private lastName: string) {}

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Create a new class called Employee that extends Person and adds a new property called salary.

class Employee extends Person {
  constructor(firstName: string, lastName: string, public salary: number) {
    super(firstName, lastName);
  }
}

// What is the difference between private and protected members?

// A : Private members are not inherited by child classes.

// Given the data below, define an interface for representing employees:

interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

interface Employee {
  name: string;
  salary: number;
  address: Address;
}
