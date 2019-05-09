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

    it('WatUtils.$(...) :: iteration function :: should correctly sum all numbers from 1 to 10', function () {
        // Act
        let startVal = 0;
        let targetVal = 10;
        let actual = 0;
        let comparatorFunc = (currVal) => currVal <= targetVal;
        let mutatorFunc = (currVal) => currVal + 1;
        let actionToPerformFunc = (currVal) => actual += currVal

        // Arrange
        WatUtils.$(startVal, comparatorFunc, mutatorFunc, actionToPerformFunc);

        // Assert
        expect(actual).toBe(55);
    });

    it('WatUtils.$(...) :: iteration function :: should correctly sum subset of numbers in list', function () {
        // Act
        let startVal = 3;
        let targetVal = 8;
        let actual = 0;
        let list = [-10,-10,-10,1,1,1,1,1,-10,-10];
        let comparatorFunc = (currVal) => currVal < targetVal;
        let mutatorFunc = (currVal) => currVal + 1;
        let actionToPerformFunc = (currVal) => actual += list[currVal];

        // Arrange
        WatUtils.$(startVal, comparatorFunc, mutatorFunc, actionToPerformFunc);

        // Assert
        expect(actual).toBe(5);
    });

    it('WatUtils.$(...) :: iteration function :: should join all strings in list', function () {
        // Act
        let startVal = 0;
        let item = ["Kirk", "Spock", "Bones", "Scottie", "Sulu"];
        let comparatorFunc = (currVal) => item[currVal] !== undefined;
        let mutatorFunc = (currVal) => currVal + 1;
        let actual = ""

        // Arrange
        WatUtils.$(startVal, comparatorFunc, mutatorFunc, (currVal) => {
            actual += item[currVal];
            if (currVal < item.length - 1) {
                actual += ", ";
            }
            return actual;
        });

        // Assert
        expect(actual).toBe("Kirk, Spock, Bones, Scottie, Sulu");
    });
});