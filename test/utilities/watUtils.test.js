describe("Wat Utilities", function () {
    let WatUtils = $_$.$;

    it('WatUtils.__(conditional,trueVal,falseVal) :: ternary :: should return `trueVal` if `conditional` is true', function () {
        // Act
        let actual = WatUtils.__(true, 'a', 'b');

        // Assert
        expect(actual).toBe('a');
    });

    it('WatUtils.__(conditional,trueVal,falseVal) :: ternary :: should return `falseVal` if `conditional` is false', function () {
        // Act
        let actual = WatUtils.__(false, 'a', 'b');

        // Assert
        expect(actual).toBe('b');
    });

    it('WatUtils.__(conditional,trueVal,falseVal) :: ternary :: should return undefined if `conditional` is not boolean', function () {
        // Act
        let actual = WatUtils.__(0, 'a', 'b');

        // Assert
        expect(actual).toBe(undefined);
    });

    it('WatUtils.$$(...) :: iteration function :: should correctly sum all numbers from 1 to 10', function () {
        // Act
        let startVal = 0;
        let targetVal = 10;
        let comparatorFunc = (currVal, targetVal) => currVal <= targetVal;
        let mutatorFunc = (currVal) => currVal + 1;
        let item = null;
        let extractorFunc = (item, currVal) => currVal;
        let joinerFunc = (currVal, recursiveResult) => currVal + recursiveResult;
        let baseVal = 0;

        // Arrange
        let actual = WatUtils.$$(startVal, targetVal, comparatorFunc, mutatorFunc, item, extractorFunc, joinerFunc, baseVal);

        // Assert
        expect(actual).toBe(55);
    });

    it('WatUtils.$$(...) :: iteration function :: should correctly sum all numbers from in `item`', function () {
        // Act
        let startVal = 0;
        let targetVal = 5;
        let comparatorFunc = (currVal, targetVal) => currVal < targetVal;
        let mutatorFunc = (currVal) => currVal + 1;
        let item = [2,4,6,8,10];
        let extractorFunc = (item, currVal) => item[currVal];
        let joinerFunc = (currVal, recursiveResult) => currVal + recursiveResult;
        let baseVal = 0;

        // Arrange
        let actual = WatUtils.$$(startVal, targetVal, comparatorFunc, mutatorFunc, item, extractorFunc, joinerFunc, baseVal);

        // Assert
        expect(actual).toBe(30);
    });

    it('WatUtils.$$(...) :: iteration function :: should join all strings in `item`', function () {
        // Act
        let startVal = 0;
        let targetVal = 5;
        let comparatorFunc = (currVal, targetVal) => currVal < targetVal;
        let mutatorFunc = (currVal) => currVal + 1;
        let item = ["Kirk", "Spock", "Bones", "Scottie", "Sulu"];
        let extractorFunc = (item, currVal) => item[currVal];
        let joinerFunc = (currVal, recursiveResult) => {
            if (recursiveResult === "") {
                return currVal;
            } else {
                return currVal + ", " + recursiveResult;
            }
        };
        let baseVal = "";

        // Arrange
        let actual = WatUtils.$$(startVal, targetVal, comparatorFunc, mutatorFunc, item, extractorFunc, joinerFunc, baseVal);

        // Assert
        expect(actual).toBe("Kirk, Spock, Bones, Scottie, Sulu");
    });
});