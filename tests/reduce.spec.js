import { reduceFilter, reduceMap } from '../homework/mightyReduce';

describe('Lesson 2', () => {
  it('reduceMap', () => {
    expect(reduceMap(x => x * 2, [1, 2, 3])).toEqual([2, 4, 6]);
    expect(reduceMap(x => x.toUpperCase(), ['a', 'b', 'c'])).toEqual(['A', 'B', 'C']);
  });

  it('reduceFilter', () => {
    expect(reduceFilter(() => true, [1, 2, 3])).toEqual([1, 2, 3]);
    expect(reduceFilter(() => false, [1, 2, 3])).toEqual([]);
    expect(reduceFilter(x => x % 2 === 0, [1, 2, 3, 4])).toEqual([2, 4]);
    expect(reduceFilter(x => x === x.toUpperCase(), ['a', 'B', 'c', 'D'])).toEqual(['B', 'D']);
  });
});
