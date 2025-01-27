import * as sut from "../../functions/utilities.js";

describe('Utilities', () => {
    it('should return valid numbers', () => {
        expect(sut.getValidNumber(42.69)).toBe(42.69);
        expect(sut.getValidNumber('42.69')).toBe(42.69);
        expect(sut.getValidNumber('42,69')).toBe(42.69);
        expect(sut.getValidNumber('foo')).toBe(0);
        expect(sut.getValidNumber(undefined)).toBe(0);
    });
});
