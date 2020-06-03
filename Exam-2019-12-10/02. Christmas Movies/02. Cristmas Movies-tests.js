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
            expect(movies.movieCollection).to.be.a('array');
            expect(movies.watched).to.be.a('object');
            expect(movies.actors).to.be.a('array');
        });

        it("all properties are initially an empty objects", () => {
            expect(movies.movieCollection.length).to.be.equal(0);
            expect(Object(movies.watched).length).to.be.equal(undefined);
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
            actualResult = movies.movieCollection[0].name
            expectedResult = 'Last Christmas';

            assert.equal(expectedResult, actualResult)
        });
        
        it("adds a bought movie to movies collection", () => {
            movies.buyMovie('Last Christmas', ['Emilia Clarke', 'Henry Golding']);
            movies.buyMovie('Past Christmas', ['Emily Clarkerson', 'Henry Golding']);
            actualResult = movies.movieCollection.length;
            expectedResult = 2;

            assert.equal(expectedResult, actualResult)
        });

        it("return proper message if movie is added successfully", () => {
            actualResult = movies.buyMovie('Last Christmas', ['Emilia Clarke', 'Henry Golding']);
            expectedResult = `You just got Last Christmas to your collection in which ${['Emilia Clarke', 'Henry Golding'].join(', ')} are taking part!`;

            assert.equal(expectedResult, actualResult);
        });
    });
});