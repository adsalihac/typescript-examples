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

class Teachers extends Persons {
  constructor(firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  override get fullName() {
    return "Professor " + this.firstName + " " + this.lastName;
  }
}

let teachers = new Teachers("John", "Doe");
teachers.walk();
