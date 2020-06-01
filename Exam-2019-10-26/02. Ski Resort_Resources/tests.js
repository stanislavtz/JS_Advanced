/* 
 Frist should install npm init, mocha chai,
next must do the following actions
Run > Open Configuration > click "Add Configuration..." button > click on the "Mocha Tests" and configurate the addons!
"tdd" => change it to "bdd"
"test" => change it to "tests"
*/
let SkiResort = require('./solution');
let assert = require("chai").assert;

describe("SkiResort functionality", () => {
    let expectedResult;
    let actualResult;
    let resort;
    let willThrow;

    beforeEach(() => {
        resort = new SkiResort("NewHope");
        expectedResult = '';
        actualResult = '';
        willThrow;
    });

    describe("constructor functionality", () => {
        it("creates a new class object with given name", () => {
            const newResort = new SkiResort("Funn");

            assert.equal(newResort.name, "Funn");
            assert.equal(newResort.voters, 0);
            assert.deepEqual(newResort.hotels, []);
        });
    });

    describe("bestHotel getter functionality", () => {
        it("return \"No votes yet\" message if voters counter is 0", () => {
            expectedResult = "No votes yet";
            actualResult = resort.bestHotel;

            assert.equal(expectedResult, actualResult)
        });

        it("returns best hotel in resort", () => {
            resort.build("Rila", 100);
            resort.build("Pogled", 80);

            resort.leave("Rila", 2, 5);
            resort.leave("Pogled", 2, 50);

            expectedResult = "Best hotel is Pogled with grade 100. Available beds: 82";
            actualResult = resort.bestHotel;

            assert.equal(expectedResult, actualResult);
        });
    });

    describe("build method functionality", () => {
        it("trows an error, if invalid name is passed in", () => {
            willThrow = () => resort.build('', 3 );
            assert.throws(willThrow, "Invalid input");           
        });

        it("trows an error, if invalid number of beds is passed in", () => {
            willThrow = () => resort.build('Rila', 0 );
            assert.throws(willThrow, "Invalid input");
        });

        it("return propper message", () => {
            actualResult = resort.build("Rila", 100);
            expectedResult = `Successfully built new hotel - Rila`;
            
            assert.equal(expectedResult, actualResult);
        });

        it("adds a new bulded hotel to hotels list", () => {
            resort.build('Rila', 100);
            expectedResult = 1;
            actualResult = resort.hotels.length;

            assert.equal(expectedResult, actualResult);
        })
    });

    describe("book method functionality", () => {
        it("throws a new error, if invalid hotel name is passed in", () => {
            willThrow = () => resort.book('', 4);
            assert.throws(willThrow, "Invalid input");           
        });

        it("trows a new error, if invalid number of beds is passed in", () => {
            willThrow = () => resort.book("Rila", 0);
            assert.throws(willThrow, "Invalid input");           
        });

        it("throws a new errror, if there is no such a hotel", () => {
            resort.build("Rila", 100);
            willThrow = () => resort.book("Plam", 3);
            assert.throws(willThrow, "There is no such hotel")
        });

        it("throws a new error, if there are not free beds", () => {
            resort.build("Hija", 4);
            willThrow = () => resort.book("Hija", 5);
            assert.throws(willThrow, "There is no free space");
        });

        it("returns a properly message", () => {
            resort.build("Rila", 100);
            expectedResult = "Successfully booked";
            actualResult = resort.book("Rila", 8);

            assert.equal(expectedResult, actualResult);
        });

        it("decrease the number of free beds", () => {
            resort.build("Rila", 100);
            resort.book("Rila", 10);

            let hotel = resort.hotels.find(hotel => hotel.name === "Rila");

            expectedResult = 90;
            actualResult = hotel.beds;

            assert.equal(expectedResult, actualResult);
        });
    });

    describe("leave method functionality", () => {
        it("throws a new error, if invalid name is passed in", () => {
            willThrow = () => resort.leave('', 4, 10);
            assert.throws(willThrow, "Invalid input");
        });

        it("throws a new error, if invalid number of beds is passed in", () => {
            resort.build("Rila", 100);
            willThrow = () => resort.leave('Rila', 0, 10);
            assert.throws(willThrow, "Invalid input");
        });

        it("throws a new error, if there is no such a hotel in hotels list", () => {
            resort.build("Rila", 100);
            willThrow = () => resort.leave('Ra', 4, 10);
            assert.throws(willThrow, "There is no such hotel");
        });

        it("return proper message if all arguments are correct", () => {
            resort.build("Rila", 100);
            resort.book("Rila", 4);
            actualResult = resort.leave("Rila", 4, 10);
            expectedResult = `4 people left Rila hotel`;

            assert.equal(expectedResult, actualResult);
        });

        it("increase number of beds", () => {
            resort.build("Rila", 100);
            resort.book("Rila", 4);
            resort.book("Rila", 4);
            resort.leave("Rila", 4, 10);

            let hotel = resort.hotels.find(hotel => hotel.name === "Rila");
            actualResult = hotel.beds;
            expectedResult = 96;

            assert.equal(expectedResult, actualResult);
        });
    });

    describe("averageGrade method functionality", () => {
        it("returns proper message, if no voters registred", () => {
            expectedResult = "No votes yet";
            actualResult = resort.averageGrade();

            assert.equal(expectedResult, actualResult);
        });

        it("returns average resort grade", () => {
            resort.build("Rila", 100);
            resort.build("Ela", 80);
            resort.build("Bor", 120);

            resort.leave("Rila", 2, 10);
            const rilaPoints = 2 * 10;

            resort.leave("Ela", 4, 2);
            const elaPoints = 4 * 2;

            resort.leave("Bor", 6, 1);
            const borPoints = 6 * 1;

            const avrgGrade = (rilaPoints + elaPoints + borPoints) / 12;

            expectedResult = `Average grade: ${avrgGrade.toFixed(2)}`;
            actualResult = resort.averageGrade();

            assert.equal(expectedResult, actualResult);
        });
    });
});