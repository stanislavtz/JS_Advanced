class Bank {
    constructor(bankName) {
        this.bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        let currentCustomer = this.allCustomers.find(c => c.personalId === customer.personalId);

        if(currentCustomer) {
            throw new Error(`${customer.firstName}${customer.LastName} is already our customer`);
        }

        this.allCustomers.push(customer);

        return customer;
    }

    depositMoney(personalId, amount) {

    }

    withdrawMoney (personalId, amount) {

    }

    customerInfo (personalId) {

    }
}
