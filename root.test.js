const root = require("./root");

describe("TestService", () => {
    test("root test", () => {
        expect(root(0)).toBe(0);
        expect(root(1)).toBe(1);
        expect(root(3)).toBe(1.73205080756887729353);
        expect(root(-3)).toBe(NaN);
        expect(root(5.5)).toBe(2.34520787991171477728);
        expect(root(-5.5)).toBe(NaN);
    })
})