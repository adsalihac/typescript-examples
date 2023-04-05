class BankAccount {
  readonly id: number;
  owner: string;
  balance: number;
  nickName?: string;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): void {
    // this.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
    if (amount <= 0) {
      throw new Error("Amount must be greater than zero");
    }
    this.balance += amount;
  }
}

let bankAccount = new BankAccount(1, "John", 1000); // Accounts { id: 1, owner: 'John', balance: 1000 }
bankAccount.deposit(500); // 1500
console.log(bankAccount); // Accounts { id: 1, owner: 'John', balance: 1500 }
