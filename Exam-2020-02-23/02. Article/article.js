class Article {
    #comments = [];
    #likes = [];
    #commentId = 0;

    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
    }

    get likes() {
        if (this.#likes.length === 0) {
            return `${this.title} has 0 likes`;
        }
        else if (this.#likes.length === 1) {
            return `${this.#likes[0]} likes this article!`;
        }
        else {
            return `${this.#likes[0]} and ${this.#likes.length - 1} others like this article!`;
        }
    }

    like(username) {
        if (this.creator === username) {
            throw new Error(`You can't like your own articles!`);
        }

        if (this.#likes.includes(username)) {
            throw new Error(`You can't like the same article twice!`);
        }

        this.#likes.push(username);

        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (!this.#likes.includes(username)) {
            throw new Error(`You can't dislike this article!`);
        }

        this.#likes = this.#likes.filter(x => x !== username);
        return `${username} disliked ${this.title}`;
    }
   
    comment(username, content, id) {
        let comment = this.#comments.find(c => c.id === id);

        if (!comment) {
            comment = {
                id: ++this.#commentId,
                username,
                content,
                replies: []
            }
            this.#comments.push(comment);

            return `${username} commented on ${this.title}`;
        }

        const reply = {
            id: comment.replies.length + 1,
            username,
            content
        }
        comment.replies.push(reply);

        return `You replied successfully`;
    }

    toString(sortingType) {
        const result = [];
        result.push(`Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this.#likes.length}\nComments:`);
 
        if(sortingType === 'username') {
            this.#comments = this.#comments.sort((a, b) => a.username.localeCompare(b.username));
            this.#comments.forEach(comment => {
                result.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`);
                
                comment.replies = comment.replies.sort((a, b) => a.username.localeCompare(b.username));
                comment.replies.forEach(replay => {
                    result.push(`--- ${comment.id}.${replay.id}. ${replay.username}: ${replay.content}`);
                });
            });
        }

        if(sortingType === 'asc') {
            this.#comments = this.#comments.sort((a, b) => a.id - b.id);
            this.#comments.forEach(comment => {
                result.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`);
                
                comment.replies = comment.replies.sort((a, b) => a.id - b.id);
                comment.replies.forEach(replay => {
                    result.push(`--- ${comment.id}.${replay.id}. ${replay.username}: ${replay.content}`);
                });
            });
        }

        if(sortingType === 'desc') {
            this.#comments = this.#comments.sort((a, b) => b.id - a.id);
            this.#comments.forEach(comment => {
                result.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`);
                
                comment.replies = comment.replies.sort((a, b) => b.id - a.id);
                comment.replies.forEach(replay => {
                    result.push(`--- ${comment.id}.${replay.id}. ${replay.username}: ${replay.content}`);
                });
            });
        }

        return result.join('\n');
    }
}

let art = new Article("My Article", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));