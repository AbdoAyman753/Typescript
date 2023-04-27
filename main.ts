class Account{
    acc_no:number;
    balance:number;
    constructor(no,balance){
        this.acc_no = no;
        this.balance = balance;
    }
    debitAmount(){
        return "Current Debit is 0 EGP.";
    }
    creditAmount(){
        return "Current Credit is 0 EGP.";
    }
    get Balance(){
        return this.Balance;
    }
}

interface IAccount{
    dateOfOpening;
    
    addCustomer(date);
    removeCustomer();
}

class CurrentAccount extends Account implements IAccount{
    interestRate:number;
    dateOfOpening:Date;

    constructor(interest,no,balance){
        super(no,balance);
        this.interestRate = interest;
    }
    addCustomer(date:Date) {
        this.dateOfOpening = date;
    }
    removeCustomer() {
        console.log("Deleting Account...");
    }
}

class SavingAccount extends Account implements IAccount{
    minBalance;
    dateOfOpening: Date;
    constructor(min_b,no, balance){
        super(no,balance);
        this.minBalance=min_b;
    }
    addCustomer(date: Date) {
        this.dateOfOpening = date;
    }
    removeCustomer() {
        console.log("Deleting Account...");
    }
    
    
}