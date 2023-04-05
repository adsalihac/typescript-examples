class Personal {
  constructor(public name: string) {}
}

class Customer extends Personal {}

function echo<T extends Personal>(value: T): T {
  return value;
}

// echo({
//   name: "Hello",
// });

echo(new Customer("Hello"));

// 2

// interface Personal {
//   name: string;
// }

// function echo<T extends Personal>(value: T): T {
//   return value;
// }

// echo({
//   name: "Hello",
// });

// 3

// function echo<T extends number | string>(value: T): T {
//   return value;
// }

// echo("Hello");
