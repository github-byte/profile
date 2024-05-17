import { sum } from './sum';
test("Sum should be equal", () => {
    expect(sum(3, 2)).toBe(5);
});

test("Sum constants", () => {
    expect(2+3).toBe(5);
});
// console.log(sum)
//for objects 
test("Object comaparision", () => {
    expect([ 1, 2 ]).toEqual([ 1, 2 ]);
})

test("Falsy", () => {
    expect(null).toBeFalsy();
})

test("Truthy", () => {
    expect([null]).toBeTruthy();
})

//toBe => number, string, boolean
//toEqual => objects, array