class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    get clientId() {
        return this.clientId;
    }
    set clientId(id) {
        let re = /\d+/;
        if (!re.test(id) || id.length !== 6) {
            throw TypeError(`Client ID must be a 6-digit number`);
        }
        return clientId;
    }

    get email(){
        return this.email;
    }
    set email(email) {
        let re = /\w+@\w+\.\w+/;
        if (!re.test(email)) {
            throw TypeError(`Invalid e-mail`);
        }
        return email;
    }

    get firstName() {
        return this.firstName;
    }
    set firstName(firstName) {
        let re = /[A-Z][a-z]+/;

        if (firstName.length < 3 || firstName.length > 20) {
            throw TypeError(`First name must be between 3 and 20 characters long`);
        }
        
        if(!re.test(firstName)){
            throw TypeError(`First name must contain only Latin characters`);
        }
        return firstName;
    }

    get lastName() {
        return this.lasttName;
    }
    set lastName(lasttName) {
        let re = /[A-Z][a-z]+/;

        if (lasttName.length < 3 || lasttName.length > 20) {
            throw TypeError(`Last name must be between 3 and 20 characters long`);
        }
        
        if(!re.test(lasttName)){
            throw TypeError(`Last name must contain only Latin characters`);
        }
        return lasttName;
    }
}