import { anagram } from '../homework/anagram';

describe('Lesson 2', () => {
  it('anagram', () => {
    expect(anagram('просветитель', 'терпеливость')).toBe(true);
    expect(anagram('Senator Palpatine', 'Planet separation')).toBe(true);
    expect(anagram('Han Solo', 'No halos')).toBe(true);
    expect(anagram('Лея Органа-Соло', 'Лея Скайуокер')).toBe(false);
    expect(anagram('Татуин', 'Дантуин')).toBe(false,);
    expect(anagram('aappcc', 'ааррсс')).toBe(false);
    expect(anagram('abbc', 'bacc')).toBe(false);
  });
});
