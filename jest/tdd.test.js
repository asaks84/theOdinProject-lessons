import math from './calculator';
import captalize from './captalize';

test('math add (2 + 3)', () => {
  expect(math.add(2, 3)).toBe(5);
});

test('math add with decimals (0.3 + 1.75)', () => {
  expect(math.add(0.3, 1.75)).toBe(2.05);
});

test('math subtract (2-2)', () => {
  expect(math.sub(2, 2)).toBe(0);
});

test('math multiply (0.85 * 325)', () => {
  expect(math.multiply(0.85, 325)).toBe(276.25);
});

test('math divide (3 * 1.5)', () => {
  expect(math.divide(3, 1.5)).toBe(2);
});

test('non number test add', () => {
  expect(math.add('abc', 'def')).toBe('invalid');
});

test('Captalize word', () => {
  expect(captalize('cauê')).toBe('Cauê');
});

test('Captalize phrase', () => {
  expect(captalize('cauê lindão')).toBe('Cauê Lindão');
});

test('Captalize phrase with punctuation', () => {
  expect(captalize("f*#k, i'm hungry!")).toBe("F*#k, I'm Hungry!");
});
