class Library {
    constructor(libraryName) {
        this.libraryName = libraryName;
        this.subscribers = [];
        this.subscriptionTypes = {
            normal: this.libraryName.length,
            special: this.libraryName.length * 2,
            vip: Number.MAX_SAFE_INTEGER
        }
    }

    subscribe(name, type) {
        if (!Object.keys(this.subscriptionTypes).includes(type)) {
            throw new TypeError(`The type ${type} is invalid`);
        }

        let person = this._findSubscriber(name);

        if (!person) {
            person = {
                name,
                type,
                books: []
            }

            this.subscribers.push(person);
        } else {
            person.type = type;
        }

        return person;
    }

    unsubscribe(name) {
        if (!this.subscribers.map(p => p.name).includes(name)) {
            throw new Error(`There is no such subscriber as ${name}`);
        }

        const index = this.subscribers.map(p => p.name).indexOf(name);
        console.log(index)
        this.subscribers.splice(index, 1);

        return this.subscribers;
    }

    receiveBook(subscriberName, bookTitle, bookAuthor) {
        const person = this._findSubscriber(subscriberName);

        if (!person) {
            throw new Error(`There is no such subscriber as ${subscriberName}`);
        }

        const maxBooks = this.subscriptionTypes[`${person.type}`];

        if (person.books.length < maxBooks) {
            let isBook = person.books.find(b => b.bookTitle === bookTitle);
            if (!isBook) {
                person.books.push({ title: bookTitle, author: bookAuthor });
            }
        }
        else {
            throw new Error(`You have reached your subscription limit ${maxBooks}!`);
        }

        return person;
    }

    showInfo() {
        let result = '';

        if (this.subscribers.length > 0) {
            this.subscribers.forEach(person => {
                const name = person.name;
                const type = person.type;
                const books = person.books.map(b => `${b.title} by ${b.author}`).join(', ');
                result += `Subscriber: ${name}, Type: ${type}\nReceived books: ${books}\n`;
            });

        } else {
            result = `${this.libraryName} has no information about any subscribers`;
        }

        return result;
    }

    _findSubscriber(name) {
        return this.subscribers.filter(p => p.name === name)[0];
    }
}

let lib = new Library('Lib');

lib.subscribe('Peter', 'normal');
lib.subscribe('John', 'special');
lib.subscribe('Josh','vip')

lib.receiveBook('John', 'A Song of Ice and Fire', 'George R. R. Martin');
lib.receiveBook('Peter', 'Lord of the rings', 'J. R. R. Tolkien');
lib.receiveBook('John', 'Harry Potter', 'J. K. Rowling');
lib.receiveBook('Josh', 'Graf Monte Cristo', 'Alexandre Dumas');
lib.receiveBook('Josh','Cromwell','Victor Hugo');
lib.receiveBook('Josh','Marie Tudor','Victor Hugo');
lib.receiveBook('Josh','Bug-Jargal','Victor Hugo');
lib.receiveBook('Josh','Les Orientales','Victor Hugo');
lib.receiveBook('Josh','Marion de Lorme','Victor Hugo');

lib.unsubscribe("Josh");

console.log(lib.showInfo());