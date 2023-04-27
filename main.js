class Account {
    constructor(no, balance) {
        this.acc_no = no;
        this.balance = balance;
    }
    debitAmount() {
        return "Current Debit is 0 EGP.";
    }
    creditAmount() {
        return "Current Credit is 0 EGP.";
    }
    get Balance() {
        return this.Balance;
    }
}
class CurrentAccount extends Account {
    constructor(interest, no, balance) {
        super(no, balance);
        this.interestRate = interest;
    }
    addCustomer(date) {
        this.dateOfOpening = date;
    }
    removeCustomer() {
        console.log("Deleting Account...");
    }
}
class SavingAccount extends Account {
    constructor(min_b, no, balance) {
        super(no, balance);
        this.minBalance = min_b;
    }
    addCustomer(date) {
        this.dateOfOpening = date;
    }
    removeCustomer() {
        console.log("Deleting Account...");
    }
}
