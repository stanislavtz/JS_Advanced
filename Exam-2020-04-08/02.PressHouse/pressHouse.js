function solveClasses() {
    class Article {
        constructor(title, content) {
            this.title = title;
            this.content = content
        }

        toString() {
            return [`Title: ${this.title}`, `Content: ${this.content}`].join('\n');
        }

    }

    class ShortReports extends Article {
        constructor(title, content, originalResearches) {
            super(title, content);
            this.originalResearches = originalResearches;
            this.comments = [];
        }

        get content() {
            return this._content;
        }
        set content(value) {
            if (value.length > 150) {
                throw new Error("Short reports content should be less then 150 symbols.");
            }

            this._content = value;
        }

        get originalResearches() {
            return this._originalResearches;
        }
        set originalResearches(value) {
            if (!(value.hasOwnProperty('title') && value.hasOwnProperty('author'))) {
                throw new Error("The original research should have author and title.");
            }

            this._originalResearches = ({ ...this._originalResearches, ...value });
        }

        addComment(comment) {
            this.comments.push(comment);
            return `The comment is added.`;
        }

        toString() {
            let result = [super.toString()];

            result.push(`Original Research: ${this.originalResearches.title} by ${this.originalResearches.author}`);
            if(this.comments.length > 0) {
                result.push('Comments:');
                result.push(this.comments.join('\n'));
            }

            return result.join('\n')
        }
    }

    class BookReview extends Article{
        constructor(title, content, book) {
            super(title, content);
            this.book = book;
            this.clients = [];
        }

        addClient(clientName, orderDescription){
            let client = this.clients.find(c => c.clientName === clientName);

            if(!client) {
                client = {
                    clientName,
                    orderDescription
                }
                this.clients.push(client);

                return `${client.clientName } has ordered a review for ${this.book.name}`;
            }

            if(client.orderDescription === orderDescription) {
                throw new Error(`This client has already ordered this review.`);
            }
        }

        toString() {
            let result = [super.toString()];
            result.push(`Book: ${this.book.name}`);

            if(this.clients.length > 0) {
                result.push(`Orders:`);
                result.push(`${this.clients.map(cl => `${cl.clientName} - ${cl.orderDescription}`).join('\n')}`);
            }

            return result.join('\n');
        }
    }

    return {
        Article,
        ShortReports,
        BookReview
    }
}

let s = 'Yes, its damn true.Spac \
eX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Ja \
vascript. What are your views on this ?';

console.log(s.length);
let classes = solveClasses();
let lorem = new classes.Article('Lorem', 'Lorem ipsum dolor sit amet, consectetur adip \
iscing elit. Fusce non tortor finibus, facilisis mauris vel…');
console.log(lorem.toString()); 

console.log('------------------------------');

let short = new classes.ShortReports('SpaceX and Javascript', 'Yes, its damn true.Spac \
eX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Ja \
vascript. What are your views on this ?', { title: 'Dragon 2', author: 'wikipedia.org'});

console.log(short.addComment('Thank god they didn\'t use java.'));
short.addComment('In the end JavaScript\'s features are executed in C++ — the underlying language.');
console.log(short.toString()); 

console.log('------------------------------');

let book = new classes.BookReview('The Great Gatsby is so much more than a love story' 
, 'The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it \
 is so much more than just a love story. It is also a reflection on the hollowness of \
a life of leisure. ...', { name: 'The Great Gatsby', author: 'F Scott Fitzgerald' });

console.log(book.addClient('The Guardian', '100 symbols'));
console.log(book.addClient('Goodreads', '30 symbols'));

console.log(book.toString());