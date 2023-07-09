class Account {
    constructor(accountNumber, cust_id, balance, deposit, withdraw) {
      this.accountNumber = accountNumber;
      this.cust_id = cust_id;
      this.balance = balance;
      this.withdraw = withdraw;
      this.deposit = deposit;
    }
  }
  
  class AccountHolders extends Account {
    constructor(accountNumber, cust_id, balance, deposit, withdraw, type, userId, password) {
      super(accountNumber, cust_id, balance, deposit, withdraw);
      this.type = type;
      this.userId = userId;
      this.password = password;
    }
  
    verifyCredentials(userId, password) {
      const accounts = [account1, account2, account3, account4];
      for (const account of accounts) {
        if (userId === account.userId && password === account.password) {
          return true;
        }
      }
      return false;
    }
  }
  
  const account1 = new AccountHolders(123456789, 1111, 5000, 2000, 500, 'savings', 'tulip', 'tulip#1');
  const account2 = new AccountHolders(234567891, 2222, 500, 1000, 500, 'savings', 'nila', 'nila#2');
  const account3 = new AccountHolders(345678912, 3333, 1050, 12000, 5000, 'savings', 'ram', 'ram#3');
  const account4 = new AccountHolders(456789123, 4444, 12000, 2000, 3000, 'savings', 'vedha', 'vedha#4');


  