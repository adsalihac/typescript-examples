export {};

function greet(name: string | null | undefined) {
  if (name) {
    console.log(`Hello ${name.toUpperCase()}`);
  } else {
    console.log('Hello');
  }
}

greet(null);
