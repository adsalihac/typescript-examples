export {};

let employee: {
  readonly id: number;
  name?: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  retire: (date: Date) => {
    console.log(`Employee ${employee.id} retires on ${date}`);
  },
};

employee.name = 'John';

console.log(employee);
employee.retire(new Date());
// employee.id = 2;
