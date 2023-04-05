class Persons {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  walk() {
    console.log(`${this.fullName} is walking`);
  }
}

class Students extends Persons {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log(`${this.fullName} is taking a test`);
  }
}

class Teacher extends Persons {
  override get fullName() {
    return "Professor " + this.firstName + " " + this.lastName;
  }
}

class Principal extends Persons {
  override get fullName() {
    return "Principal " + this.firstName + " " + this.lastName;
  }
}

printFullName([
  new Students(1, "Jane", "Doe"),
  new Teacher("John", "Smith"),
  new Principal("John", "Doe"),
]);

function printFullName(people: Persons[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}
