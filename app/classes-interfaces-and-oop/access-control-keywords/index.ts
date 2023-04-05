class BankAccounts {
  readonly id: number;
  owner: string;
  private _balance: number;
  nickName?: string;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

  deposit(amount: number): void {
    // this.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
    if (amount <= 0) {
      throw new Error("Amount must be greater than zero");
    }
    // Record a transaction
    this._balance += amount;
  }

  getBalance(): number {
    return this._balance;
  }

  private calculateTax(): number {
    return this._balance * 0.1;
  }
}

let bankAccounts = new BankAccounts(1, "John", 1000); // Accounts { id: 1, owner: 'John', balance: 1000 }
bankAccounts.deposit(500); // 1500
console.log(bankAccounts.getBalance()); // 1500
