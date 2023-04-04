export {};

let speed: number | null = null;

let ride = {
  // Falsy (undefined , null , '' , false , 0)
  //   speed: speed != null ? speed : 30,
  //Nullish coalescing operator
  speed: speed ?? 30,
};

console.log(ride.speed);
