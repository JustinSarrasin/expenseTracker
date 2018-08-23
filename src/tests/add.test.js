const add = (a,b) => a + b;
const greeting = (name) => `hello ${name}!`;

test('should add two numbers', () => {
  const result = add(3,4);
  expect(result).toBe(7);
});

test('name should be justin', () => {
  const result = greeting('justin');
  expect(result).toBe('hello justin!');
});