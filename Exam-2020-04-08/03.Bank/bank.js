class Bank {
    #bankName;
    constructor(bankName) {
        this.#bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        let currentCustomer = this.allCustomers.find(c => c.personalId === customer.personalId);

        if (currentCustomer) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }

        Object.defineProperties(customer, {
            transactions: { value: [] },
            totalMoney: { value: 0, writable: true }
        });

        this.allCustomers.push(customer);

        return customer;
    }

    depositMoney(personalId, amount) {
        const customer = this._checkCustomer(personalId);

        const transaction = {
            type: 'deposit',
            amount
        }

        customer.transactions.push(transaction);
        customer.totalMoney += amount;

        return `${customer.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        const customer = this._checkCustomer(personalId);

        if (customer.totalMoney - amount < 0) {
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`)
        }

        const transaction = {
            type: 'withdraw',
            amount
        }

        customer.transactions.push(transaction);
        customer.totalMoney -= amount;

        return `${customer.totalMoney}$`;
    }

    customerInfo(personalId) {
        const customer = this._checkCustomer(personalId);

        let result = [];
        result.push(`Bank name: ${this.#bankName}`);
        result.push(`Customer name: ${customer.firstName} ${customer.lastName}`);
        result.push(`Customer ID: ${customer.personalId}`);
        result.push(`Total Money: ${customer.totalMoney}$`);

        let num = customer.transactions.length;
        if (customer.transactions.length > 0) {
            result.push(`Transactions:`);
            customer.transactions.reverse().forEach(tr => {
                if (tr.type === 'deposit') {
                    result.push(`${num}. ${customer.firstName} ${customer.lastName} made deposit of ${tr.amount}$!`);
                } else {
                    result.push(`${num}. ${customer.firstName} ${customer.lastName} withdrew ${tr.amount}$!`);
                }
                num--;
            });
        }

        return result.join('\n');
    }

    _checkCustomer(personalId) {
        const customer = this.allCustomers.find(c => c.personalId == personalId);

        if (!customer) {
            throw new Error("We have no customer with this ID!");
        }

        return customer;
    }
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));

bank.depositMoney(4151596, 555);
console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));

