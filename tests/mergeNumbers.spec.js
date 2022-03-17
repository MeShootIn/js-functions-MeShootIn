import { mergeNumbers } from '../homework/mergeNumbers';

describe('Lesson 2', () => {
  it('mergeNumbers', () => {
    expect(mergeNumbers(1)).toBe(1);
    expect(mergeNumbers(10001)).toBe(2);
    expect(mergeNumbers(12345)).toBe(6);
    expect(mergeNumbers(15334232)).toBe(5);
    expect(mergeNumbers(987654321)).toBe(9);
    expect(mergeNumbers(555555555555)).toBe(6);
    expect(mergeNumbers(50349814743854)).toBe(2);
  });
});
