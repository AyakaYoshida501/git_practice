const question = require("./four_operation");

describe("TestService", () => {
    test("add test", () => {
        expect(question.addTest(2, 4)).toBeCloseTo(6);
        expect(question.addTest(0, -4)).toBeCloseTo(-4);
        expect(question.addTest(-2, -4)).toBeCloseTo(-6);
        expect(question.addTest(9.2, 8.4)).toBeCloseTo(17.6);
        expect(question.addTest(10.6, 18.7)).toBeCloseTo(29.3);
        expect(question.addTest(100, 200)).toBeCloseTo(300);
    }),

    test("minus test", () => {
        expect(question.minusTest(8, 4)).toBeCloseTo(4);
        expect(question.minusTest(9, 14)).toBeCloseTo(-5);
        expect(question.minusTest(0, -4)).toBeCloseTo(4);
        expect(question.minusTest(-2, -4)).toBeCloseTo(2);
        expect(question.minusTest(9.2, 8.1)).toBeCloseTo(1.1);
        expect(question.minusTest(10.2, 8.6)).toBeCloseTo(1.6);
        expect(question.minusTest(300, 200)).toBeCloseTo(100);
    }),

    test("times test", () => {
        expect(question.timesTest(2, 4)).toBeCloseTo(8);
        expect(question.timesTest(0, 2)).toBeCloseTo(0);
        expect(question.timesTest(-2, -4)).toBeCloseTo(8);
        expect(question.timesTest(2, -4)).toBeCloseTo(-8);
        expect(question.timesTest(9.2, 8.4)).toBeCloseTo(77.28);
        expect(question.timesTest(1.7, 2.8)).toBeCloseTo(4.76);
        expect(question.timesTest(100, 200)).toBeCloseTo(20000);
    }),

    test("divide test", () => {
        expect(question.divideTest(8, 2)).toBeCloseTo(4);
        expect(question.divideTest(-2, -4)).toBeCloseTo(0.5);
        expect(question.divideTest(2, -4)).toBeCloseTo(-0.5);
        expect(question.divideTest(10.5, 2.5)).toBeCloseTo(4.2);
        expect(question.divideTest(216.5, 3.2)).toBeCloseTo(67.65625);
        expect(question.divideTest(300, 150)).toBeCloseTo(2);
    })
})