// let a = 100;
export {};

// Given the data below, define a type alias for representing users.

type User = {
  name: string;
  age: number;
  occupation?: string;
};

let users: User[] = [
  {
    name: "John",
    age: 30,
    occupation: "Hacker",
  },
  {
    name: "Jane",
    age: 28,
  },
];

console.log(users);

// Birds fly. Fish swim. A Pet can be a Bird or Fish. Use type aliases to represent these

type Bird = {
  fly: () => void;
};

type Fish = {
  swim: () => void;
};

type Pet = Bird | Fish;

let pet: Pet = {
  fly: () => console.log("I'm flying"),
  swim: () => console.log("I'm swimming"),
};

console.log(pet);

// Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”,
// etc.

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let day: DayOfWeek = "Monday";

console.log(day);

// Simplify the following code snippets:

type Users = {
  address: {
    street: string;
  };
};

let user = getUser();
console.log(user?.address?.street);

let foo: string = "foo";

let x = foo ?? bar();

function bar(): string {
  return "bar";
}

function getUser(): Users | undefined {
  return {
    address: {
      street: "123 Main St",
    },
  };
}

console.log(x);

// What is the problem in this piece of code?

let value: unknown = "a";
if (typeof value === "string") {
  console.log(value.toUpperCase());
}
