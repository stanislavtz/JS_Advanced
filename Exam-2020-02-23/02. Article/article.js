class Article {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
    }

    get likes() {
       
    }
   
    like(username) {
        if (this.creator === username) {
            throw new Error(`You can't like your own articles!`);
        }

       
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {

    }

    comment(username, content, id) {

    }

    toString(sortingType) {

    }
}

let art = new Article("My Article", "Anny");
art.like("John");
console.log(art.likes);
