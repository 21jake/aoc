import { sumArray } from './first.js';

const top3MaxInArray = (arr: number[]) => {
  const sorted = arr.sort((a, b) => b - a);
  return sorted.slice(0, 3);
};

export default () => {
  // return sum of the top 3 numbers in the array
  return top3MaxInArray(sumArray).reduce((acc, curr) => acc + curr, 0);
};
