import input from './input.js';
const keys = Object.keys(input)
  .map((e) => Number(e))
  .sort((a, b) => a - b);

// const minKey = keys[0];
const maxKey = keys[keys.length - 1];

const smallerNumberOnTheLeft = (treeLineIndex: number, treeIndex: number) => {
  const treeLine = input[treeLineIndex].split('');
  const tree = Number(treeLine[treeIndex]);
  let count = 1;
  for (let index = treeLineIndex - 1; index > 0; index--) {
    const element = treeLine[index];
    if (Number(element) >= tree) {
        break;
    }
    count++;
  }
  return count;
};

const smallerNumberOnTheRight = (treeLineIndex: number, treeIndex: number) => {
  const treeLine = input[treeLineIndex].split('');
  const tree = Number(treeLine[treeIndex]);
  let count = 1;
  for (let index = treeLineIndex + 1; index <= maxKey; index++) {
    const element = treeLine[index];
    if (Number(element) >= tree) {
        break;
    }
    count++;
  }
  return count;
};

const smallerNumberTop = (treeLineIndex: number, treeIndex: number) => {
  const treeLine = input[treeLineIndex].split('');
  const tree = Number(treeLine[treeIndex]);

  let count = 1;

  for (let index = treeLineIndex - 1; index > 0; index--) {
    const element = input[index][treeIndex];
    if (Number(element) >= tree) {
        break;
    }
    count++;
  }
  return count;
};

const smallerNumberBottom = (treeLineIndex: number, treeIndex: number) => {
  const treeLine = input[treeLineIndex].split('');
  const tree = Number(treeLine[treeIndex]);

  let count = 1;

  for (let index = treeLineIndex + 1; index <= maxKey; index++) {
    const element = input[index][treeIndex];
    if (Number(element) >= tree) {
        break;
    }
    count++;
  }
  return count;
};



export default () => {
  let output = [];

  for (let index = keys[0]; index <= maxKey; index++) {
    const treeLine: string = input[index];

    for (let j = 0; j < treeLine.length; j++) {
      const left = smallerNumberOnTheLeft(index, j);
      const right = smallerNumberOnTheRight(index, j);
      const top = smallerNumberTop(index, j);
      const bottom = smallerNumberBottom(index, j);
      const score = left * right * top * bottom;
      output.push(score);

      if (index === 2 && j === 3) {
        console.log({ tree: treeLine[j] });

 console.log({ left, right, top, bottom, score });
      }
    }

    // console.log('----');
  }
  const result = Math.max(...output);
  console.log({ result });
};
