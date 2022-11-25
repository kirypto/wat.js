import {assert as chaiAssert} from 'chai';
import {$_$} from "../src/wat.js";

// const wat = $_$;

interface ChaiAssert {
    typeOf: (actual: any, expectedType: string) => void;
    equal: (actual: any, expected: any, message?: string) => void;
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

    const supportedLetters = "abc";
    for (const letter of supportedLetters) {
        const key: string = lpad(letter.charCodeAt(0).toString(2), "0", 8)
            .replaceAll("0", "_").replaceAll("1", "$");

        it(`should have ${letter} stored at ${key}`, () => {
            // Arrange
            // Act
            const actual = $_$[literalContainer][key];

            // Assert
            assert.equal(actual, letter);
        });
    }
});

describe("Functions", () => {
    describe("Ternary", () => {
        it('should return second argument when first argument is true', () => {
            // Arrange
            // Act
            const actual = $_$.$.__(true, "correct", "incorrect (wrong parameter was returned)");

            // Assert
            assert.equal(actual, "correct");
        });
        it('should return third argument when first argument is false', () => {
            // Arrange
            // Act
            const actual = $_$.$.__(true, "correct", "incorrect (wrong parameter was returned)");

            // Assert
            assert.equal(actual, "correct");
        });
    });
});
