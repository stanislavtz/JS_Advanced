class Article {
    _comments = [];
    _likes = [];
    _commentId = 0;

    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        }
        else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this article!`;
        }
        else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this article!`;
        }
    }

    like(username) {
        if (this.creator === username) {
            throw new Error(`You can't like your own articles!`);
        }

        if (this._likes.includes(username)) {
            throw new Error(`You can't like the same article twice!`);
        }

        this._likes.push(username);

        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error(`You can't dislike this article!`);
        }

        this._likes = this._likes.filter(x => x !== username);
        return `${username} disliked ${this.title}`;
    }
   
    comment(username, content, id) {
        let comment = this._comments.find(c => c.Id === id);

        if (!id || !comment) {
            comment = {
                Id: ++this._commentId,
                Username: username,
                Content: content,
                Replies: []
            }
            this._comments.push(comment);

            return `${username} commented on ${this.title}`;
        }

        const reply = {
            Id: comment.Replies.length + 1,
            Username: username,
            Content: content
        }
        comment.Replies.push(reply);

        return `You replied successfully`;
    }

    toString(sortingType) {
        let result = '';
        result += `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:\n`;
 
        let sortedReplies;
        if(sortingType === 'username') {
            this._comments = this._comments.sort((a, b) => a.Username.localeCompare(b.Username));
            this._comments.forEach(comment => {
                result += `-- ${comment.Id}. ${comment.Username}: ${comment.Content}\n`;
                
                sortedReplies = comment.Replies.sort((a, b) => a.Username.localeCompare(b.Username));
                sortedReplies.forEach(replay => {
                    result += `--- ${comment.Id}.${replay.Id}. ${replay.Username}: ${replay.Content}\n`;
                });
            });
        }

        if(sortingType === 'asc') {
            this._comments = this._comments.sort((a, b) => a.Id - b.Id);
            this._comments.forEach(comment => {
                result += `-- ${comment.Id}. ${comment.Username}: ${comment.Content}\n`;
                
                sortedReplies = comment.Replies.sort((a, b) => a.Id - b.Id);
                sortedReplies.forEach(replay => {
                    result += `--- ${comment.Id}.${replay.Id}. ${replay.Username}: ${replay.Content}\n`;
                });
            });
        }

        if(sortingType === 'desc') {
            this._comments = this._comments.sort((a, b) => b.Id - a.Id);
            this._comments.forEach(comment => {
                result += `-- ${comment.Id}. ${comment.Username}: ${comment.Content}\n`;
                
                sortedReplies = comment.Replies.sort((a, b) => b.Id - a.Id);
                sortedReplies.forEach(replay => {
                    result += `--- ${comment.Id}.${replay.Id}. ${replay.Username}: ${replay.Content}\n`;
                });
            });
        }

        return result.trim();
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