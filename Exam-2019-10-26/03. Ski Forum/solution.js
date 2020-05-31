class Forum {
    
    #users = [];
    #questions = [];
    #id = 1;

    register(username, password, repeatPassword, email) {
        if (!(username && password && repeatPassword && email)) {
            throw new Error("Input can not be empty");
        }

        if (password !== repeatPassword) {
            throw new Error("Passwords do not match");
        }

        if (this.findUser(username)) {
            throw new Error("This user already exists!");
        }

        const user = {
            username,
            password,
            email
        }

        this.#users.push(user);

        return `${username} with ${email} was registered successfully!`;
    }

    login(username, password) {
        const user = this.findUser(username);

        if (!user) {
            throw new Error("There is no such user")
        }

        if (user.password === password && !user.isLoggedIn) {
            user.isLoggedIn = true;
            return "Hello! You have logged in successfully";
        }
    }

    logout(username, password) {
        const user = this.findUser(username);

        if (!user) {
            throw new Error("There is no such user")
        }

        if (user.password === password && user.isLoggedIn) {
            user.isLoggedIn = false;
            return "You have logged out successfully";
        }
    }

    postQuestion(username, question) {
        const user = this.findUser(username);

        if (!user || !user.isLoggedIn) {
            throw new Error("You should be logged in to post questions");
        }

        if (!question) {
            throw new Error("Invalid question");
        }

        this.#questions.push(
            {
                id: this.#id,
                author: username,
                question,
                answers: []
            }
        )

        this.#id++;

        return `Your question has been posted successfully`;
    }

    postAnswer(username, questionId, answer) {
        const user = this.findUser(username);

        if (!user || !user.isLoggedIn) {
            throw new Error("You should be logged in to post answers");
        }

        if (!answer) {
            throw new Error("Invalid answer");
        }

        const question = this.#questions.find(q => q.id === questionId);

        if(!question) {
            throw new Error("There is no such question");
        }

        question.answers.push({author: username, answer});

        return `Your answer has been posted successfully`;
    }

    showQuestions() {
        let result = '';
        this.#questions.forEach(element => {
            result += `Question ${element.id} by ${element.author}: ${element.question}\n`;

            element.answers = element.answers.map(e => `---${e.author}: ${e.answer}`);
            result += element.answers.join('\n') + '\n';
        });

        return result.trim();
    }

    findUser(username) {
        return this.#users.find(u => u.username === username);
    }
}

let forum = new Forum();

forum.register('Michael', '123', '123', 'michael@abv.bg');
forum.register('Stoyan', '123ab7', '123ab7', 'some@gmail@.com');
forum.login('Michael', '123');
forum.login('Stoyan', '123ab7');

forum.postQuestion('Michael', "Can I rent a snowboard from your shop?");
forum.postAnswer('Stoyan',1, "Yes, I have rented one last year.");
forum.postQuestion('Stoyan', "How long are supposed to be the ski for my daughter?");
forum.postAnswer('Michael',2, "How old is she?");
forum.postAnswer('Michael',2, "Tell us how tall she is.");

console.log(forum.showQuestions());