/**
 First you should install mocha and chai, using the following commands in terminal:
 >>>npm install mocha <Enter>
 >>>npm install chai <Enter>
 next you should configurate Run command
 go to menu -> Run -> Open Configurations -> click on the button Add Configuration -> choose "Mocha Tests"
 change tdd -> bdd
 change tets in {"${workspaceFolder}/BookStore-tests"} 
 Ctrl+S
 close JSON file
*/

let BookStore = require("./02. Book Store_Ресурси");
let assert = require("chai").assert;

describe("BookStore functionality", () => {
    let expectedResult;
    let actualResult;
    let store;

    beforeEach(() => {
        store = new BookStore("Knowledge");
        expectedResult = '';
        actualResult = '';
    });

    describe("constructor functionality", () => {
        it("creates a new class object by given name", () => {
            assert.equal("Knowledge", store.name);
            assert.deepEqual([], store.books);
            assert.deepEqual([], store.workers);
        });
    });

    describe("stockBooks method functionality", () => {
        it("appends the given books liskt to the books property", () => {
            expectedResult = ['asd', 'sdf', 'dfg'];
            actualResult = store.stockBooks(['asd-a', 'sdf-s', 'dfg-d']).map(b => b.title);

            assert.deepEqual(expectedResult, actualResult);
            assert.equal(3, store.books.length);
        });
    });

    describe("hire method functionality", () => {
        it("throws a new error if worker is already hired", () => {
            store.hire("Stanislav", "Manager");
            let willThrow = () => store.hire("Stanislav", "seller");
            assert.throws(willThrow, 'This person is our employee');
        });

        it("return massage that this person is hired on the given position", () => {
            expectedResult = `Stanislav started work at ${store.name} as Manager`;
            actualResult = store.hire("Stanislav", "Manager");
        });

        it("adds the new worker in workers list", () => {
            store.hire("Stanislav", "Manager");
            store.hire("Stasi", "Junior Manager");

            expectedResult = 1;
            actualResult = actualResult = store.workers.map(w => w.name).indexOf("Stasi");

            assert.equal(expectedResult, actualResult);
            assert.equal(2, store.workers.length);
        });

        it("keeps the property data of hired worker", () => {
            store.hire("Stanislav", "Manager");

            assert.equal("Stanislav", store.workers[0].name);
            assert.equal("Manager", store.workers[0].position);
            assert.equal(0, store.workers[0].booksSold);
        })
    });

    describe("fire method functionality", () => {
        it("throws an error if worker dosn't exist in workers list", () => {
            store.hire("Stanislav", "Manager");
            let willThrow = () => store.fire("Mitko");

            assert.throws(willThrow, "Mitko doesn't work here");
        });

        it("fire an employee", () => {
            store.hire("Pesho", "seller");

            expectedResult = "Pesho is fired";
            actualResult = store.fire("Pesho");

            assert.equal(expectedResult, actualResult);
        });

        it("removes the fired emplyee from the workers list", () => {
            store.hire("Pesho", "pmng");
            store.fire("Pesho");

            expectedResult = -1;
            actualResult = store.workers.map(w => w.name).indexOf("Pesho");

            assert.equal(expectedResult, actualResult);
            assert.equal(0, store.workers.length)
        });
    });

    describe("sellBook method functionality", () => {
        it("throws an error if book is out of stock", () => {
            store.hire("Stanislav", "Manager");
            let willThrow = () => store.sellBook("alabala", "Stanislav");

            assert.throws(willThrow, 'This book is out of stock');
        });

        it("throws an error, if the passed in eployye dosn't exist", () => {
            store.stockBooks(['alabala-Ala', 'sdf-S', 'dfg-Df']);
            let willThrow = () => store.sellBook("alabala", "Stanislav");

            assert.throws(willThrow, `Stanislav is not working here`);
        });

        it("removes the given book from books collection", () => {
            store.hire("Stan", "book-seller");
            store.stockBooks(['asd-ASD', 'sdf-SDF', 'asd-ASD']);
            store.sellBook('asd', 'Stan');

            expectedResult = [{ title: 'sdf', author: 'SDF' }];
            actualResult = store.books;

            assert.deepEqual(expectedResult, actualResult);

            let worker = store.workers.find(w => w.name === "Stan");

            assert.equal(1, worker.booksSold);
        });
    });

    describe("printWorkers method functionality", () => {
        it("prints workers statistic of sold books", () => {
            let result = '';

            store.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear']);

            store.hire('George', 'seller');
            store.hire('Ina', 'seller');

            store.sellBook('Inferno', 'Ina');
            store.sellBook('Harry Potter', 'George');
            store.sellBook('The Jungle', 'Ina');

            actualResult = store.printWorkers();

            expectedResult = (function () {
                store.workers.forEach(w => {
                    result += `Name:${w.name} Position:${w.position} BooksSold:${w.booksSold}\n`
                });

                return result.trim();
            })();

            assert.equal(expectedResult, actualResult)
        });
    });
});