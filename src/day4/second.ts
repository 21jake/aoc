import _ from 'lodash';
import { parsed } from './first.js';

const checkIfTwoArrayIntersect = (arr1: Array<any>, arr2: Array<any>) => {
  const result = _.intersection(arr1, arr2);
  return result.length > 0;
};

export default () => {
  let count = 0;
  for (let index = 0; index < parsed.length; index++) {
    const [arr1, arr2] = parsed[index];
    const result = checkIfTwoArrayIntersect(arr1, arr2);
    if (result) {
      //   console.log({ arr1, arr2 });
      count++;
    }
  }
  console.log({ count });
};
