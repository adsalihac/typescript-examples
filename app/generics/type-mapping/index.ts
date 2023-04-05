interface Prod {
  name: string;
  price: number;
}

// interface ReadOnlyProd {
//   readonly name: string;
//   readonly price: number;
// }

type ReadOnlyProd<T> = {
  readonly [K in keyof T]: T[K];
};

type Optional<T> = {
  [K in keyof T]?: T[K];
};

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

let prod: ReadOnlyProd<Prod> = {
  name: "a",
  price: 100,
};

// prod.name = "b"; // error
