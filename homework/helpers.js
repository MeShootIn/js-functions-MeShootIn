export function countMap(arr) {
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
}

export function charMap(str) {
  return countMap(
    [...str]
      .map(char => char.toLowerCase())
  );
}
