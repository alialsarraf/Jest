
import { sum, multiple, subtract } from '../sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3);
});

test('subtact 1 - 2 to equal -1', () => {
  expect(subtract(1,2)).toBe(-1);
});

test('multiply 1 * 2 to equal 2', () => {
  expect(multiple(1,2)).toBe(2);
});