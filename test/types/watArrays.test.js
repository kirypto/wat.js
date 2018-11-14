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

    it('array.__(index,value) :: insert :: should false when negative index provided', function () {
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

    it('array.__(index,value) :: insert :: should return false when index is out of range', function () {
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

    it('array.__(index,value) :: insert :: should true when index is zero of new array', function () {
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
        WatArray.__(array, 0, 4);

        // Assert
        expect(array[0]).toBe(4);
    });

    it('array.__(index,value) :: insert :: should contain value into position zero of new array', function () {
        // Arrange
        let array = WatArray();

        // Act
        array.__(0, 4);

        // Assert
        expect(array[0]).toBe(4);
    });

    it('WatArray.__(array,index,value) :: insert :: should contain correctly populated values', function () {
        // Arrange
        let array = WatArray();

        // Act
        WatArray.__(array, 0, 'b');
        WatArray.__(array, 1, 'd');
        WatArray.__(array, 1, 'c');
        WatArray.__(array, 0, 'a');

        // Assert
        expect(array[0]).toBe('a');
        expect(array[1]).toBe('b');
        expect(array[2]).toBe('c');
        expect(array[3]).toBe('d');
    });

    it('array.__(index,value) :: insert :: should contain correctly populated values', function () {
        // Arrange
        let array = WatArray();

        // Act
        array.__(0, 'b');
        array.__(1, 'd');
        array.__(1, 'c');
        array.__(0, 'a');

        // Assert
        expect(array[0]).toBe('a');
        expect(array[1]).toBe('b');
        expect(array[2]).toBe('c');
        expect(array[3]).toBe('d');
    });

    it('WatArray.__$(array,value) :: append :: should contain value at end of array', function () {
        // Arrange
        let array = WatArray();
        WatArray.__(array, 0, 'a');
        WatArray.__(array, 1, 'b');

        // Act
        WatArray.__$(array, 'c');

        // Assert
        expect(array[2]).toBe('c');
    });

    it('array.__$(value) :: append :: should contain value at end of array', function () {
        // Arrange
        let array = WatArray();
        array.__(0, 'a');
        array.__(1, 'b');

        // Act
        array.__$('c');

        // Assert
        expect(array[2]).toBe('c');
    });

    it('WatArray.___(array,value) :: prepend :: should contain value at beginning of array', function () {
        // Arrange
        let array = WatArray();
        WatArray.__(array, 0, 'b');
        WatArray.__(array, 1, 'c');

        // Act
        WatArray.___(array, 'a');

        // Assert
        expect(array[0]).toBe('a');
    });

    it('array.___(value) :: prepend :: should contain value at beginning of array', function () {
        // Arrange
        let array = WatArray();
        array.__(0, 'b');
        array.__(1, 'c');

        // Act
        array.___('a');

        // Assert
        expect(array[0]).toBe('a');
    });

    it('WatArray.$$(array,function) :: foreach :: should call function for each value', function () {
        // Arrange
        let array = WatArray();
        WatArray.__$(array, 2);
        WatArray.__$(array, 3);
        WatArray.__$(array, 5);
        WatArray.__$(array, 8);
        let sum = 0;

        // Act
        WatArray.$$(array, (value) => sum += value);

        // Assert
        expect(sum).toBe(18);
    });

    it('array.$$(function) :: foreach :: should call function for each value', function () {
        // Arrange
        let array = WatArray();
        array.__$(2);
        array.__$(3);
        array.__$(5);
        array.__$(8);
        let sum = 0;

        // Act
        array.$$((value) => sum += value);

        // Assert
        expect(sum).toBe(18);
    });
});