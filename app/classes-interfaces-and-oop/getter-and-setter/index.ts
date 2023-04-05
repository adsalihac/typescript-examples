class BankAccountDetails {
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

  get balance(): number {
    return this._balance;
  }

  set balance(amount: number) {
    if (amount <= 0) {
      throw new Error("Amount must be greater than zero");
    }
    // Record a transaction
    this._balance += amount;
  }
}

let bankAccountDetails = new BankAccountDetails(1, "John", 1000); // Accounts { id: 1, owner: 'John', balance: 1000 }
bankAccountDetails.balance = 500; // 1500
console.log(bankAccountDetails.balance); // 1500
