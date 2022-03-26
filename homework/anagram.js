import { charMap } from './helpers';

/**
 * Напишите функцию anagram(first, second), определяющую,
 * являются ли переданные строки first и second анаграммами.
 *
 * Пример:
 * anagram('просветитель', 'терпеливость') === true
 *
 * Больше примеров в тестах.
 *
 * @param  {string} first первая строка
 * @param  {string} second вторая строка
 * @return {boolean}
 */
export function anagram(first, second) {
  const equalMaps = (a, b) => {
    if (a.size !== b.size) {
      return false;
    }

    for (const key of a.keys()) {
      if (a.get(key) !== b.get(key)) {
        return false;
      }
    }

    return true;
  };

  const charsFirst = charMap(first);
  const charsSecond = charMap(second);

  return equalMaps(charsFirst, charsSecond);
}
