describe("Wat Arrays", function () {

    let WatArray = $_$.$$._;

    it('WatArray() :: constructor :: should create a wat array', function () {
        // Act
        let actual = WatArray();

        // Assert
        expect(actual).not.toBe(undefined);
    });

    it('WatArray._(array) :: length :: should return zero for empty array', function () {
        // Arrange
        let array = WatArray();

        // Act
        let actual = WatArray._(array);

        // Assert
        expect(actual).toBe(0);
    });

    it('array._() :: length :: should return zero when `array` is empty', function () {
        // Arrange
        let array = WatArray();

        // Act
        let actual = array._();

        // Assert
        expect(actual).toBe(0);
    });
});