import math from './calculator';
import captalize from './captalize';
import reverse from './reverse';
import caesar from './caesar';

// math tests
describe('math test', () => {
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
});

// captalize tests
describe('Captalize strings', () => {
  test('Captalize word', () => {
    expect(captalize('cauê')).toBe('Cauê');
  });

  test('Captalize phrase', () => {
    expect(captalize('cauê lindão')).toBe('Cauê Lindão');
  });

  test('Captalize phrase with punctuation', () => {
    expect(captalize("f*#k, i'm hungry!")).toBe("F*#k, I'm Hungry!");
  });
});

// reverse string tests
describe('Reverse string', () => {
  test('Reverses phrase with punctuation', () => {
    expect(reverse("f*#k, i'm hungry!")).toBe("!yrgnuh m'i ,k#*f");
  });

  test('reverses single word', () => {
    expect(reverse('hello')).toEqual('olleh');
  });

  test('reverses multiple words', () => {
    expect(reverse('hello there')).toEqual('ereht olleh');
  });

  test('reverse works with numbers and punctuation', () => {
    expect(reverse('123! abc!')).toEqual('!cba !321');
  });
  test('reverse works with blank strings', () => {
    expect(reverse('')).toEqual('');
  });
});

// caesar tests
describe('Caesar Cipher', () => {
  test("'Beautiful people' with key 5", () => {
    const phrase = 'Beautiful people';
    const key = 5;
    expect(caesar(phrase, key)).toBe('gjfzynkzq ujtuqj');
  });

  test("'Zimbabue' with key 3", () => {
    const phrase = 'Zimbabue';
    const key = 3;
    expect(caesar(phrase, key)).toBe('clpedexh');
  });

  test("'Cauê 123!' with key 7", () => {
    const phrase = 'Cauê 123!';
    const key = 7;
    expect(caesar(phrase, key)).toBe('jhbê 123!');
  });
});
