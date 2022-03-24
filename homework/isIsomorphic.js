// TODO  прописать биекцию для изоморфизма
/**
 * Напишите функцию isIsomorphic(left, right), определяющую,
 * являются ли строки left и right изоморфными.
 *
 * Две строки называются изоморфными, если в строке A можно заменить
 * символы таким образом, чтобы получилась строка B.
 *
 * Каждый конкретный символ может заменяться только на один конкретный
 * символ, в том числе на самого себя. При этом все вхождения символа N
 * могут быть заменены только на символ M.
 *
 * Порядок символов должен остаться неизменным.
 *
 * Пример:
 * isIsomorphic('egg', 'foo') === true
 * isIsomorphic('foo', 'bar') === false
 *
 * @param  {string} left
 * @param  {string} right
 * @return {boolean}
 */
export function isIsomorphic(left, right) {
  if (left.length !== right.length) {
    return false;
  }

  const map = new Map();
  const set = new Set();

  for (let i = 0; i < left.length; i++) {
    const charLeft = left[i];
    const charRight = right[i];

    if (map.has(charLeft)) {
      if (map.get(charLeft) !== charRight) {
        return false;
      }
    } else {
      if (set.has(charRight)) {
        return false;
      }

      map.set(charLeft, charRight);
      set.add(charRight);
    }
  }

  return true;
}
