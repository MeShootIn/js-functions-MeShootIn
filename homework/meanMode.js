/**
 * Напишите функцию meanMode(numbers), принимающую массив чисел numbers
 * и возвращающую true, если среднее значение числового ряда равно
 * числу (или любому из чисел), встречающемуся чаще остальных. Иначе
 * вернуть false.
 *
 * Если есть несколько чисел, встречающихся одинаковое количество раз,
 * и чаще всех остальных, считать входящий массив невалидным и
 * возвращать false.
 *
 * Пример:
 * meanMode([1]) === true
 * meanMode([4, 4, 4, 6, 2]) === true
 * meanMode([1, 2, 3]) === false
 * meanMode([1, 1, 1, 2, 5]) === false
 * meanMode([]) === false
 *
 * Больше примеров в тестах.
 *
 * @param  {number[]} numbers массив целых положительных чисел.
 * @return {boolean}
 */
export function meanMode(numbers) {
  const countMap = arr => {
    const map = new Map();

    arr
      .forEach(elem => {
        if (!map.has(elem)) {
          map.set(elem, 1);
        } else {
          const count = map.get(elem);

          map.set(elem, count + 1);
        }
      });

    return map;
  };

  const avg = arr => arr.reduce((sum, elem) => sum + elem, 0) / arr.length;

  const countNumbers = countMap(numbers);
  const countArray = [...countNumbers.entries()];
  const maxCount = countArray.reduce((max, elem) => Math.max(max, elem[1]), 0);
  const maxes = countArray.filter(elem => elem[1] === maxCount);

  if (numbers.length > 0 && (maxes.length === 1 || maxes.length === countNumbers.size) && avg(numbers) === maxes[0][0]) {
    return true;
  }

  return false;
}
