import input from './input.js';

const keys = Object.keys(input)
  .map((e) => Number(e))
  .sort((a, b) => a - b);

const minKey = keys[0];
const maxKey = keys[keys.length - 1];

const gatherTopTrees = (treeLineIndex: string | number, treeIndex: number) => {
  const output = [];
  for (let index = 0; index <= treeLineIndex; index++) {
    output.push(input[index][treeIndex]);
  }
  return output;
};

const gatherBottomTrees = (
  treeLineIndex: string | number,
  treeIndex: number,
) => {
  const output = [];
  for (let index = Number(treeLineIndex); index <= maxKey; index++) {
    output.push(input[index][treeIndex]);
  }
  return output;
};

const checkBiggest = (number: number, array: number[]) => {
  return (
    number === Math.max(...array) &&
    array.filter((e) => e === number).length === 1
  );
};

const detechIfTreeIsVisible = (
  treeLineIndex: string | number,
  treeIndex: number,
) => {
  const treeLine = input[treeLineIndex].split('');
  const tree = Number(treeLine[treeIndex]);

  if (
    treeIndex === 0 ||
    Number(treeLineIndex) === minKey ||
    Number(treeLineIndex) === maxKey
  ) {
    return true;
  }
  if (treeIndex === input[treeLineIndex].length - 1) {
    return true;
  }

  const leftTrees = treeLine.slice(0, treeIndex + 1).map((e) => Number(e));
  const rightTrees = treeLine.slice(treeIndex).map((e) => Number(e));
  const topTrees = gatherTopTrees(treeLineIndex, treeIndex).map((e) =>
    Number(e),
  );
  const bottomTrees = gatherBottomTrees(treeLineIndex, treeIndex).map((e) =>
    Number(e),
  );

  const biggestLeft = checkBiggest(tree, leftTrees);
  const biggestRight = checkBiggest(tree, rightTrees);
  const biggestTop = checkBiggest(tree, topTrees);
  const biggestBottom = checkBiggest(tree, bottomTrees);

  const isVisible = biggestLeft || biggestRight || biggestTop || biggestBottom;

  return isVisible;
};

let count = 0;
for (let index = keys[0]; index <= maxKey; index++) {
  const treeLine: string = input[index];
  for (let j = 0; j < treeLine.length; j++) {
    const result = detechIfTreeIsVisible(index, j);
    // console.log({ tree: input[index][j], result });
    if (result) {
      count++;
    }
  }
  console.log('----');
}

export default () => {
  console.log({ count });
};
