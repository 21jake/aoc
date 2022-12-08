import input from './input.js';
import _ from 'lodash';

export const parsed = input
  .split('\n')
  .map((e) => e.split(','))
  .filter((e) => e.length > 1)
  .map((e) =>
    e
      .map((q) => {
        return q.split(' ');
      })
      .map((w) => {        
        const [_min, _max] = w[0].split('-');
        const min = Math.min(Number(_min), Number(_max));
        const max = Math.max(Number(_min), Number(_max));

        const output = [];
        for (let i = min; i <= max; i++) {
          output.push(i);
        }

        return output.sort((a, b) => a - b);
      }),
  );

const checkIfTwoArrayIncludes = (arr1: Array<number>, arr2: Array<number>) => {
    if (!arr1.length && !arr2.length) return false
  const result =
    _.difference(arr1, arr2).length === 0 || _.difference(arr2, arr1).length === 0;
  return result;
};

export default () => {
  let count = 0;
  for (let index = 0; index < parsed.length; index++) {
      const [arr1, arr2] = parsed[index];
      console.log(parsed[index])
    const result = checkIfTwoArrayIncludes(arr1, arr2);
    if (result) {
    //   console.log({ arr1, arr2 });
      count++
    }
  }
  console.log({ count });
  
};
