import input from './input.js';

export const parsed = input.split('\n').filter((e) => Boolean(e));

// given an even-length string, split the string into 2 strings at the middle
export const splitString = (str: string) => {
  const middle = str.length / 2;
  return [str.slice(0, middle), str.slice(middle)];
};

// give an array of strings, find the shared characters of those strings
export const findSharedStrings = (input: string[]): string => {
  let output = '';
  const charMap = {};
  const [first, ...rest] = input;
  for (let i = 0; i < first.length; i++) {
    const char = first[i];
    charMap[char] = 1;

    for (let j = 0; j < rest.length; j++) {
      const other = rest[j];
      if (other.includes(char)) {
        charMap[char] += 1;
      }
    }
    if (charMap[char] === input.length) {
      output = char;
      break;
    }
  }

  return output;
};

export const splited = parsed.map((str) => splitString(str));
export const intersectionalChars = splited.map((e) => findSharedStrings(e));

// every char type can be converted to a priority:

// Lowercase item types a through z have priorities 1 through 26.
// Uppercase item types A through Z have priorities 27 through 52.

// given a char, return its priority
export const getPriority = (char: string) => {
  const charCode = char.charCodeAt(0);
  if (charCode >= 97 && charCode <= 122) {
    return charCode - 96;
  }
  if (charCode >= 65 && charCode <= 90) {
    return charCode - 38;
  }
  return null;
};

const prioritiesSum = intersectionalChars
  .map((char) => getPriority(char))
  .reduce((acc, curr) => acc + curr, 0);



export default () => {
  console.log({ intersectionalChars, prioritiesSum });
};
