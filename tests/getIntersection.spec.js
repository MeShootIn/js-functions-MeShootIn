import { getIntersection } from '../homework/getIntersection';

describe('Lesson 2', () => {
  it('getIntersection', () => {
    expect(getIntersection([1, 5, 7, 9, 3], [1, 2, 3, 4])).toEqual([1, 3]);
    expect(getIntersection([1, 9, 10, 3, 5, 7], [10, 3, 4])).toEqual([3, 10]);
    expect(getIntersection([1, 1, 2], [2, 1, 1, 1])).toEqual([1, 1, 2]);
    expect(getIntersection([1, 1, 1, 2], [2, 1, 1])).toEqual([1, 1, 2]);

    const a = [1, 1, 2];
    const b = [1, 2, 3, 4];

    expect(getIntersection(a, b)).toEqual([1, 2]);
    expect(a).toEqual([1, 1, 2]);
    expect(b).toEqual([1, 2, 3, 4]);
  });
});
