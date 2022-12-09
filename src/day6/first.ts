import input from './input.js';

const detectIfArrayContainsDuplicateElement = (array: string[]) => {
  const set = new Set(array);
  return set.size !== array.length;
};

export const detectLastIndexOfDistinctElement = (sliceLength = 4) => {
  let output = undefined;
  for (let index = 0; index < input.length; index++) {
    const lastIndexOfSlice = index + sliceLength ;
    const array = input.slice(index, lastIndexOfSlice);
    const result = detectIfArrayContainsDuplicateElement(array);
    if (!result) {
      output = lastIndexOfSlice;
      break;
    }
  }
  return output;
};

export default () => {
  const output = detectLastIndexOfDistinctElement();
  console.log({ output});
  
};
