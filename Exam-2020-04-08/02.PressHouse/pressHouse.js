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
        constructor(title, content, originalResearches, comments) {
            super(title, content);
            this.originalResearches = {
                title,
                author
            };
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
            if (!(this.offscreenBuffering.hasOwnProperty(title) && this.offscreenBuffering.hasOwnProperty(author))) {
                throw new Error("The original research should have author and title.");
            }
        }
    }

    class BookReview {
    }

    return {
        Article,
        ShortReports,
        BookReview
    }
}

let classes = solveClasses();
// let lorem = new classes.Article("Lorem", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non tortor finibus, facilisis mauris vel…");
// console.log(lorem.toString());
// // ------------------------------
// let short = new classes.ShortReports("SpaceX and Javascript", "Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?", { title: "Dragon 2", author: "wikipedia.org" });
// console.log(short.addComment("Thank god they didn't use java."));
// short.addComment("In the end JavaScript's features are executed in C++ — the underlying language.");
// console.log(short.toString()); 
let short = new classes.ShortReports('Title', 'Content', {title: "Dragon 2", author: ''})