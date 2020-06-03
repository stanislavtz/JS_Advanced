const ChristmasMovies = require("./02. Christmas Movies_Resources");
const assert = require('chai').assert;
const expect = require('chai').expect;

describe("Christmas movie functionality", () => {
    let movies;
    let expectedResult;
    let actualResult;
    let throwFunc;

    beforeEach(() => {
        movies = new ChristmasMovies();
        expectedResult = '';
        actualResult = '';
    });

    describe("constructor functionality", () => {
        it("create movies object with corect properties", () => {
            expect(movies).to.have.own.property("movieCollection");
            expect(movies).to.have.own.property("watched");
            expect(movies).to.have.own.property("actors");
        });

        it("movecollection property is an array", () => {
            assert.deepEqual([], movies.movieCollection);
            assert.deepEqual({}, movies.watched);
            assert.deepEqual([], movies.actors);

        });

        it("all properties are initially an empty objects", () => {
            expect(movies.movieCollection.length).to.be.equal(0);
            expect(Object.keys(movies.watched).length).to.be.equal(0);
            expect(movies.actors.length).to.be.equal(0);
        });
    });

    describe("buyMovie method, functionality", () => {
        it("throws a new error, if the person allready own the given movie", () => {
            movies.buyMovie('Last Christmas', ['Emilia Clarke', 'Henry Golding']);
            throwFunc = () => movies.buyMovie('Last Christmas', ['Emilia Clarke', 'Henry Golding']);
            assert.throws(throwFunc, 'You already own Last Christmas in your collection!');
        });

        it("adds a bought movie to movies collection", () => {
            movies.buyMovie('Last Christmas', ['Emilia Clarke', 'Henry Golding']);
            actualResult = movies.movieCollection[0].name;
            expectedResult = 'Last Christmas';

            assert.equal(expectedResult, actualResult);
        });
        
        it("adds a bought movie to movies collection", () => {
            movies.buyMovie('Last Christmas', ['Emilia Clarke', 'Henry Golding']);
            movies.buyMovie('Past Christmas', ['Emily Clarkerson', 'Henry Golding']);
            actualResult = movies.movieCollection.length;
            expectedResult = 2;

            assert.equal(expectedResult, actualResult);
        });

        it("return proper message if movie is added successfully", () => {
            actualResult = movies.buyMovie('Last Christmas', ['Emilia Clarke', 'Henry Golding', 'Emilia Clarke']);
            expectedResult = `You just got Last Christmas to your collection in which ${['Emilia Clarke', 'Henry Golding'].join(', ')} are taking part!`;

            assert.equal(expectedResult, actualResult);
        });
    });

    describe("discardMovie method, functionality", () => {
        it("throws a new error, if there is no such a movie in collection", () => {
            throwFunc = () => movies.discardMovie("StarWars");
            assert.throws(throwFunc, "StarWars is not at your collection!");
        });

        it("throws a new error in movie is not watched yet", () => {
            movies.buyMovie('StarWars', ['Luck', 'Lea', 'Han']);
            throwFunc = () => movies.discardMovie('StarWars');

            assert.throws(throwFunc, 'StarWars is not watched!');
        });

        it("returns proper message", () => {
            movies.buyMovie('StarWars', ['Luck', 'Lea', 'Han']);
            movies.watchMovie('StarWars');
            actualResult = movies.discardMovie('StarWars');
            expectedResult = `You just threw away StarWars!`;

            assert.equal(expectedResult, actualResult);
        });
    });

    describe("watchMovie method, functionality", () => {
        it("throws a new error, if there is no such a movie in collection", () => {
            throwFunc = () => movies.watchMovie('StarWars');
            assert.throws(throwFunc, `No such movie in your collection!`);
        });

        it("adds new movie in watched movies list", () => {
            movies.buyMovie('StarWars', ['Luck', 'Lea', 'Han']);
            movies.watchMovie('StarWars');
            actualResult = movies.watched['StarWars'];
            expectedResult = 1;

            assert.equal(expectedResult, actualResult);
        });

        it("adds new movie in watched movies list", () => {
            movies.buyMovie('StarWars', ['Luck', 'Lea', 'Han']);
            movies.watchMovie('StarWars');
            movies.watchMovie('StarWars');
            movies.watchMovie('StarWars');
            actualResult = movies.watched['StarWars'];
            expectedResult = 3;

            assert.equal(expectedResult, actualResult);
        });
    });

    describe("favouriteMovie method, functionality", () => {
        it("throws a new error, if there is no favorites movie", () => {
            movies.buyMovie('StarWars', ['Luck', 'Lea', 'Han']);
            throwFunc = () => movies.favouriteMovie();
            assert.throws(throwFunc, `You have not watched a movie yet this year!`);
        });

        it("return proper message, if tehre is favorite movie", () => {
            movies.buyMovie('StarWars IV', ['Luck', 'Lea', 'Han']);
            movies.buyMovie('StarWars V', ['Luck', 'Lea', 'Han']);
            movies.watchMovie('StarWars IV');
            movies.watchMovie('StarWars V');
            movies.buyMovie('StarWars VI', ['Luck', 'Lea', 'Han']); 
            movies.watchMovie('StarWars IV');
            movies.watchMovie('StarWars V');
            movies.watchMovie('StarWars VI');
            movies.watchMovie('StarWars VI');
            movies.watchMovie('StarWars VI');

            actualResult = movies.favouriteMovie();
            expectedResult = `Your favourite movie is StarWars VI and you have watched it 3 times!`;

            assert.equal(expectedResult, actualResult);
        });
    });

    describe("mostStarredActor method, functionality", () => {
        it("throws a new error, if there is no watched movies yet", () => {
            throwFunc = () => movies.mostStarredActor();
            assert.throws(throwFunc, `You have not watched a movie yet this year!`);
        });

        it("returns proper message if there is a Movie Star", () => {
            movies.buyMovie('StarWars VI', ['Luck', 'Lea', 'Han']);
            movies.buyMovie('StarWars VII', ['Luck', 'Lea', 'Han', 'Rei']);
            actualResult = movies.mostStarredActor();
            expectedResult = `The most starred actor is Luck and starred in 2 movies!`

            assert.equal(expectedResult, actualResult);
        });
    });
});