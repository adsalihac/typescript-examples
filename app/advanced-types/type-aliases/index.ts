export {};

// Type aliases
type Employee = {
  id: number;
  name?: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  retire: (date: Date) => {
    console.log(`Employee ${employee.id} retires on ${date}`);
  },
};

employee.name = 'John';

console.log(employee);
employee.retire(new Date());
// employee.id = 2;
