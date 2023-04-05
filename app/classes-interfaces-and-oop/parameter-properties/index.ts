class BankAcc {
  nickName?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Amount must be greater than zero");
    }
    // Record a transaction
    this._balance += amount;
  }

  getBalance(): number {
    return this._balance;
  }
}

let bankAcc = new BankAcc(1, "John", 1000); // Accounts { id: 1, owner: 'John', balance: 1000 }
bankAcc.deposit(500); // 1500
console.log(bankAcc.getBalance()); // 1500
