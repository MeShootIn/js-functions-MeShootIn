/**
 * Напишите функцию mergeNumbers(number), складывающую
 * все цифры числа number до тех пор, пока не получится
 * однозначный результат.
 *
 * Пример:
 * mergeNumbers(1) === 1
 * mergeNumbers(10001) === 2
 * mergeNumbers(15334232) === 5
 * mergeNumbers(50349814743854) === 2
 *
 * @param {number} number
 */
export function mergeNumbers(number) {
  let result = number;

  const digitSum = num => [...`${num}`]
    .reduce((sum, digit) => sum + (+digit), 0);

  while (result >= 10) {
    result = digitSum(result);
  }

  return result;
}
