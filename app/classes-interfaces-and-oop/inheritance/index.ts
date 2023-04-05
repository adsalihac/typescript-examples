class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  walk() {
    console.log(`${this.fullName} is walking`);
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log(`${this.fullName} is taking a test`);
  }
}

let student = new Student(123, "John", "Doe");
student.takeTest();
student.walk();
