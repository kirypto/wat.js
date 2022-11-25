import {assert as chaiAssert} from 'chai';
import {$_$} from "../src/wat.js";


interface ChaiAssert {
    typeOf: (actual: any, expectedType: string, message?: string) => void;
    equal: (actual: any, expected: any, message?: string) => void;
    lengthOf: (actual: any, expectedLength: number, message?: string) => void;
    deepEqual: (actual: any, expected: any, message?: string) => void;
}

const assert: ChaiAssert = chaiAssert;

function lpad(value: string, char: string, length: number): string {
    return value.length >= length ? value : lpad(char + value, char, length);
}

describe(`Literals`, () => {
    const literalContainer = "_";
    it(`should have literal container object stored in '${literalContainer}'`, () => {
        // Act
        // assert.equal(wat, 5);
        const actual = $_$._;

        // Assert
        assert.typeOf(actual, "object");
    });

    const supportedLetters = "abcnorstu";
    for (const letter of supportedLetters) {
        const key: string = lpad(letter.charCodeAt(0).toString(2), "0", 8)
            .replaceAll("0", "_").replaceAll("1", "$");

        it(`should have ${letter} stored at ${key}`, () => {
            // Arrange
            // Act
            const actual = $_$._[key];

            // Assert
            assert.equal(actual, letter);
        });
    }
});

describe(`Functions`, () => {
    describe(`Ternary`, () => {
        it(`should return second argument when first argument is true`, () => {
            // Arrange
            // Act
            const actual = $_$.$.__(true, "correct", "incorrect (wrong parameter was returned)");

            // Assert
            assert.equal(actual, "correct");
        });
        it(`should return third argument when first argument is false`, () => {
            // Arrange
            // Act
            const actual = $_$.$.__(true, "correct", "incorrect (wrong parameter was returned)");

            // Assert
            assert.equal(actual, "correct");
        });
    });
    
    describe("Iterator", () => {
        const incrementBy1 = (i) => i + 1;
        const incrementBy2 = (i) => i + 2;
        const incrementAlphabetically = (l: string) => String.fromCharCode(l.charCodeAt(0) + 1);
        const isLessThan5 = (i) => i < 5;

        it(`should not invoke action when starting value is above comparison value`, () => {
            // Arrange
            // Act
            const actual = [];
            $_$.$.$$(11, isLessThan5, incrementBy1, (i) => actual.push(i));

            // Assert
            assert.lengthOf(actual, 0);
        });
        it(`should invoke action for 1 through 4 when starting at 1, continuing while < 5, and inc by 1`, () => {
            // Arrange
            const expected = [1, 2, 3, 4];

            // Act
            const actual = [];
            $_$.$.$$(1, isLessThan5, incrementBy1, (i) => actual.push(i));

            // Assert
            assert.deepEqual(actual, expected);
        });
        it(`should invoke action for 0, 2, 4 when starting at 0, continuing while < 5, and inc by 2`, () => {
            // Arrange
            const expected = [0, 2, 4];

            // Act
            const actual = [];
            $_$.$.$$(0, isLessThan5, incrementBy2, (i) => actual.push(i));

            // Assert
            assert.deepEqual(actual, expected);
        });
        it(`should invoke action for 'a', 'b', 'c' when starting at 'a', continuing while <= 'c', and inc alphabetically`, () => {
            // Arrange
            const expected = ["a", "b", "c"];

            // Act
            const actual = [];
            $_$.$.$$("a", (l) => l <= "c", incrementAlphabetically, (i) => actual.push(i));

            // Assert
            assert.deepEqual(actual, expected);
        });
    });
});
