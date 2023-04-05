class Accounts {
  id: number;
  owner: string;
  balance: number;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Amount must be greater than zero");
    }
    this.balance += amount;
  }
}

let account = new Accounts(1, "John", 1000); // Accounts { id: 1, owner: 'John', balance: 1000 }
account.deposit(500); // 1500
console.log(account); // Accounts { id: 1, owner: 'John', balance: 1500 }

console.log(typeof account); // object
console.log(account instanceof Accounts); // true
