import { capitalize, reverseString, calculator, caeserCipher, analyzeArray } from './main.js';

it('First leter should be uppercase', () => {
    expect(capitalize('david')).toMatch('David');
})

it('Reverse string', () => {
    expect(reverseString('Hello World')).toMatch('dlroW olleH');
})

it("subtract", () => {
    expect(calculator.subtract(1, 1)).toBe(0);
})

it("add", () => {    
    expect(calculator.add(1, 1)).toBe(2);  
})

it("multiply", () => {
    expect(calculator.multiply(2, 2)).toBe(4);
})

it("divide", () => {
    expect(calculator.divide(4, 2)).toBe(2);
})

it("caeser cipher", () => {
    expect(caeserCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
})

it("analizing array", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toBe('average: 4, min: 1, max: 8, length: 6');
})