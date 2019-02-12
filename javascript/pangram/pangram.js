export const isPangram = (word = '') => {
  const uniques = new Set();
  word
    .split('')
    .map(e => e.toLowerCase())
    .forEach(el => (/[a-z]/.test(el) ? uniques.add(el) : undefined));
  return uniques.size === 26;
};
