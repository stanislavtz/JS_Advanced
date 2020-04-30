const solution = (function solution() {
    function call(post, command) {
        if (command === 'upvote') {
            post.upvotes++;
        }
        else if (command === 'downvote') {
            post.downvotes++;
        }
        else if (command === 'score') {
            const output = [];
            let totalPost = post.upvotes + post.downvotes;
            let coefficient = 0;
            let maxVotes;

            if (totalPost > 50) {
                maxVotes = Math.max(post.upvotes, post.downvotes);
                coefficient = Math.ceil(maxVotes * 0.25);
            }

            output.push(post.upvotes + coefficient);
            output.push(post.downvotes + coefficient);
            output.push(post.upvotes - post.downvotes);
            output.push(postRating(post));

            return output;
        }
    }   

    function postRating(post) {
        let upVotes = post.upvotes;
        let downVotes = post.downvotes;
        let totalVotes = upVotes + downVotes;
        let balance = upVotes - downVotes;

        const ratings = {
            'new': totalVotes < 10,
            'hot': (upVotes / totalVotes) > 0.66,
            'controversial': balance >= 0 && (upVotes > 100 || downVotes > 100),
            'unpopular': balance < 0
        }
        
        for (const iter of Object.keys(ratings)) {
            if(ratings[iter]){
                return iter;
            }
        }

        return 'new';
    }

    return {
        call
    }
})();

const forumPost = {
    id: '1',
    author: 'pesho',
    content: 'hi guys',
    upvotes: 0,
    downvotes: 0
};

solution.call(forumPost, 'upvote');
let answer = solution.call(forumPost, 'score');
console.log(answer);                        // [1, 0, 1, 'new']            

const post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

solution.call(post, 'upvote');              // upvotes = 101
solution.call(post, 'downvote');            // downvotes = 101

// Max votes are 101 => obfuscated votes becames: up = down = 101 + 101*0.25 = 127
let score = solution.call(post, 'score');       
console.log(score);                         // [127, 127, 0, 'controversial']

// dounvotting 50 times
for (let i = 0; i < 50; i++) {              
    solution.call(post, 'downvote');        
}

score = solution.call(post, 'score');      
console.log(score);                          // [139, 189, -50, 'unpopular']
