const abc = require("../raise")

describe('TestService', () => {
    test("square test", () => {
        expect(abc.func1(4, 2)).toBe(16);
        expect(abc.func1(36,3)).toBe(46656);
        expect(abc.func1(3, 5)).toBe(243); 
        expect(abc.func1(3, -1)).toBe(0.3333333333333333); 
        expect(abc.func1(7, 0)).toBe(1);
        expect(abc.func1(3, 1.5)).toBe(5.196152422706632);
        expect(abc.func1(1.5, 3)).toBe(3.375);
        expect(abc.func1(8, 5.2)).toBe(49667.00045141274);
        expect(abc.func1(-4, 3)).toBe(-64);
        expect(abc.func1(4, -3)).toBe(0.015625);
    })
});