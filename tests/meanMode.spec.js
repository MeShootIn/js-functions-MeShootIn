import { meanMode } from '../homework/meanMode';

describe('Lesson 2', () => {
  it('meanMode', () => {
    expect(meanMode([1, 2, 3, 2])).toBe(true);
    expect(meanMode([4, 4, 4, 6, 2])).toBe(true);
    expect(meanMode([1, 2, 2, 1, 2, 4])).toBe(true);
    expect(meanMode([1, 2, 3, 4, 5, 4, 2, 3, 3])).toBe(true);
    expect(meanMode([9, 1, 5, 5, 4, 5, 9, 2, 5])).toBe(true);
    expect(meanMode([4, 2, 1, 4, 1, 3, 2, 2, 2, 1, 0, 2])).toBe(true);
    expect(meanMode([1, 2, 3])).toBe(false);
    expect(meanMode([1, 1, 1, 2, 2, 2, 5])).toBe(false);
    expect(meanMode([1, 2, 2, 1, 2, 3, 1])).toBe(false);
    expect(meanMode([1, 22, 3, 10, 1, 10, 9])).toBe(false);
    expect(meanMode([1, 22, 3, 10, 1, 10, 9])).toBe(false);
    expect(meanMode([1, 1, 1, 2, 5])).toBe(false);
    expect(meanMode([])).toBe(false);
  });
});
