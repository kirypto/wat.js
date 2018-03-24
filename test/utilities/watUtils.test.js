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

    it('WatUtils.__(conditional,trueVal,falsVal) :: ternary :: should return undefined if `conditional` is not boolean', function () {
        // Act
        let actual = WatUtils.__(0, 'a', 'b');

        // Assert
        expect(actual).toBe(undefined);
    });
});