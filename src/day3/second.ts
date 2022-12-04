import { findSharedStrings, getPriority, parsed } from './first.js';

const grouped = parsed
  .map((_, i) => {
    if ((i + 1) % 3 === 0) {
      return [parsed[i - 2], parsed[i - 1], parsed[i]];
    }
    return null;
  })
  .filter((e) => Boolean(e));

export default () => {
  const intersectionalChars = grouped.map((e) => findSharedStrings(e));

  const prioritiesSum = intersectionalChars
    .map((char) => getPriority(char))
    .reduce((acc, curr) => acc + curr, 0);

  console.log({ prioritiesSum });
};
