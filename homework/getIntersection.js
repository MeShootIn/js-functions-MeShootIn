import { countMap } from './helpers';

/**
 * Напишите функцию getIntersection(first, second), возвращающую
 * массив из общих значений массивов first и second.
 *
 * Результирующий массив должен быть отсортирован по возрастанию.
 *
 * Пример:
 * getIntersection([1, 3, 5, 7, 9], [1, 2, 3, 4]); //  [1, 3]
 * getIntersection([1, 1, 2], [2, 1, 1, 1]); // [1, 1, 2]
 *
 * @param  {number[]} first исходные массивы
 * @param  {number[]} second исходные массивы
 * @return {number[]} массив значений, отсортированный по возрастанию
 */
export function getIntersection(first, second) {
  const intersectionMap = (a, b) => {
    const result = new Map();

    a
      .forEach((countA, elemA) => {
        if (!b.has(elemA)) {
          return;
        }

        const countB = b.get(elemA);

        result.set(elemA, Math.min(countA, countB));
      });

    return result;
  };

  const countsFirst = countMap(first);
  const countsSecond = countMap(second);
  const intersection = intersectionMap(countsFirst, countsSecond);
  const result = [];

  intersection
    .forEach((count, elem) => {
      for (let i = 0; i < count; ++i) {
        result.push(elem);
      }
    });

  return result.sort((a, b) => a - b);
}
