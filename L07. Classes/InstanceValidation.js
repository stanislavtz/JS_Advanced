class CheckingAccount {
    #clientId;
    #email;
    #firstName;
    #lastName;

    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName
    }

    get clientId() {
        return this.#clientId;
    }

    get email() {
        return this.#email;
    }

    get firstName() {
        return this.#firstName;
    }

    get lastName() {
        return this.#lastName;
    }

    set clientId(id) {
        if (id.toString().length !== 6) {
            throw new TypeError('Client ID must be a 6-digit number');
        }

        this.#clientId = id;
    }

    set email(mail) {
        let re = /\w+@\w+\.\w+/;
        if(!re.exec(mail)) {
            throw new TypeError('Invalid e-mail');
        }
        
        this.#email = mail;
    }

    set firstName(fName) {
        this.#firstName = this.validateName(fName, "First");
    }

    set lastName(lName) {
        this.#lastName = this.validateName(lName, "Last");
    }

    validateName(name, position) {
        let re = /[A-Z][a-z]+/;

        if(name.length < 3 || name.length > 20) {
            throw new TypeError(`${position} name must be between 3 and 20 characters long`);
        }

        if(!re.exec(name)) {
            throw new TypeError(`${position} name must contain only Latin characters`);
        }

        return name;
    }
}

let acc = new CheckingAccount('423545', 'ivan@some.com', 'Iv4an', 'Pe4trov');
acc.clientId = 5555895
console.log(acc.clientId)