// let a = 100;
export {};

//For each of these values, what type will the TypeScript compiler infer?

let a: number = 100;
let b: string = 'Coffee';
let c: boolean[] = [true, false, false];
let d: {age: number} = {age: 30};
let e: number[] = [3];
let f: any;
let g: any[] = [];

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);

// What are the compilation errors in each of the following code snippets?

let song: {
  title: string;
  releaseYear?: number;
} = {
  title: 'The Less I Know The Better',
};

let prices: number[] = [100, 200, 300];
prices[0] = 400;

function myFunction(aa: number, bb: number): number {
  return aa + bb;
}

console.log(song);
console.log(myFunction(1, 2));
