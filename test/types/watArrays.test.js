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

    it('WatArray.__(array,index,value) :: insert :: should false when negative index provided', function () {
        // Arrange
        let array = WatArray();

        // Act
        let actual = WatArray.__(array, -1, 4);

        // Assert
        expect(actual).toBe(false);
    });

    it('array.__(array,index,value) :: insert :: should false when negative index provided', function () {
        // Arrange
        let array = WatArray();

        // Act
        let actual = array.__(-1, 4);

        // Assert
        expect(actual).toBe(false);
    });

    it('WatArray.__(array,index,value) :: insert :: should return false when index is out of range', function () {
        // Arrange
        let array = WatArray();

        // Act
        let actual = WatArray.__(array, 1, 4);

        // Assert
        expect(actual).toBe(false);
    });

    it('array.__(array,index,value) :: insert :: should return false when index is out of range', function () {
        // Arrange
        let array = WatArray();

        // Act
        let actual = array.__(1, 4);

        // Assert
        expect(actual).toBe(false);
    });

    it('WatArray.__(array,index,value) :: insert :: should true when index is zero of new array', function () {
        // Arrange
        let array = WatArray();

        // Act
        let actual = WatArray.__(array, 0, 4);

        // Assert
        expect(actual).toBe(true);
    });

    it('array.__(array,index,value) :: insert :: should true when index is zero of new array', function () {
        // Arrange
        let array = WatArray();

        // Act
        let actual = array.__(0, 4);

        // Assert
        expect(actual).toBe(true);
    });

    it('WatArray.__(array,index,value) :: insert :: should contain value into position zero of new array', function () {
        // Arrange
        let array = WatArray();

        // Act
        let actual = WatArray.__(array, 0, 4);

        // Assert
        expect(actual[0]).toBe(4);
    });

    it('array.__(array,index,value) :: insert :: should contain value into position zero of new array', function () {
        // Arrange
        let array = WatArray();

        // Act
        let actual = array.__(0, 4);

        // Assert
        expect(actual[0]).toBe(4);
    });
});