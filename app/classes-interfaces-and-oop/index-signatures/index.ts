class SeatAssignment {
  // A1, A2, A3, A4, A5, A6, A7, A8, A9, A10
  // Mosh , John, Jane, Mary, Mark, Paul, Peter, Sam, Tom, Bob
  // Index signature property
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = "Mosh";
seats.A2 = "John";
seats["A3"] = "Jane";

console.log(seats);
