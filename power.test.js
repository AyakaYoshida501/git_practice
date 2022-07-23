const power = require("./power");

describe("TestService", () => {
  test("power test", () => {
    expect(power(5, 2)).toBe(1);
    expect(power(-8, 2)).toBe(0);
    expect(power(-10, 3)).toBe(-1);
    expect(power(-8, -3)).toBe(-2);
    expect(power(9, -5)).toBe(4);
    expect(power(138, 7)).toBe(5);
    expect(power(1987.562, 2)).toBe(1.5619999999998981);
    expect(power(57, 0.23)).toBe(0.18999999999999753);
    expect(power(67.9457, 1.678)).toBe(0.8257000000000048);
    expect(power(0, 2)).toBe(0);
    expect(power(9, 18)).toBe(9);
    expect(power(10, 2)).not.toBe(5);
    expect(power(5, 0)).toBe(NaN);
  });
});
