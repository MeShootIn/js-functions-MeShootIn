import { getUnique } from '../homework/getUnique';

describe('Lesson 2', () => {
  it('getUnique', () => {
    expect(getUnique([1, 2, 4, 2, 3, 1])).toEqual([1, 2, 3, 4]);
    expect(getUnique([1, 1, 1, 1, 1])).toEqual([1]);
    expect(getUnique([])).toEqual([]);
    expect(getUnique([0])).toEqual([0]);

    const input = [5, 5, 2];

    expect(getUnique(input)).toEqual([2, 5]);
    expect(input).toEqual([5, 5, 2]);
  });
});
