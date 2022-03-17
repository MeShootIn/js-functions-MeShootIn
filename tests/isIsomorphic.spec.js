import { isIsomorphic } from '../homework/isIsomorphic';

describe('Lesson 2', () => {
  it('isIsomorphic', () => {
    expect(isIsomorphic('a', 'a')).toBe(true);
    expect(isIsomorphic('bac', 'cab')).toBe(true);
    expect(isIsomorphic('egg', 'foo')).toBe(true);
    expect(isIsomorphic('good', 'deer')).toBe(true);
    expect(isIsomorphic('ok', 'notok')).toBe(false);
    expect(isIsomorphic('foo', 'bar')).toBe(false);
    expect(isIsomorphic('bar', 'foo')).toBe(false);
    expect(isIsomorphic('good', 'dder')).toBe(false);
    expect(isIsomorphic('dder', 'good')).toBe(false);
    expect(isIsomorphic('seeds', 'flags')).toBe(false);
    expect(isIsomorphic('abca', 'abcd')).toBe(false);
    expect(isIsomorphic('tralala', 'hehehow')).toBe(false);
    expect(isIsomorphic('hi', 'hithere')).toBe(false);
  });
});
