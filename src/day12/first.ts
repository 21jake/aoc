import { test, orderLevel } from './input.js';

const findCharOrderLevel = (char) => {
  const keys = Object.keys(orderLevel);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    if (orderLevel[key] === char) {
      return Number(key);
    }
  }
};

export default () => {
  // Apply a BFS algorithm to find the shortest path from starting node to ending node

    const startingNode = [0, 0];
    const endingNode = [2, 5];
    
//   const startingNode = [20, 0];
//   const endingNode = [20, 135];

  const visited = new Set();
  visited.add(startingNode.toString());

  const queue = [
    {
      node: startingNode.toString(),
      distance: 0,
    },
  ];

  while (queue.length) {
    const { node, distance } = queue.shift();

    const [x, y] = node.split(',').map((e) => Number(e));

    const nodeOrderLevel = findCharOrderLevel(test[x][y]);

    const neighbors = [
      [x + 1, y],
      [x - 1, y],
      [x, y + 1],
      [x, y - 1],
    ];

    for (let index = 0; index < neighbors.length; index++) {
      const neighbor = neighbors[index];
      const [neighborX, neighborY] = neighbor;
      const neighborNode = test[neighborX]?.[neighborY];
      const neighborString = neighbor.toString();


      const isVisited = visited.has(neighborString);

      if (isVisited || !neighborNode) {
        continue;
      }

      const neighborOrderLevel = findCharOrderLevel(neighborNode);
      const sameLevelOrOneAbove =
        neighborOrderLevel === nodeOrderLevel ||
        neighborOrderLevel === nodeOrderLevel + 1;

      if (!sameLevelOrOneAbove) {
        continue;
      }

    //   if (neighborNode === 'i') {
    //     console.log({
    //       currentNode: test[x][y],
    //       neighborNode: test[neighborX][neighborY],
    //       x, y, neighborX, neighborY,
    //     });
    //   }


      visited.add(neighborString);
      queue.push({
        node: neighborString,
        distance: distance + 1,
      });

    //   if (neighborString === endingNode.toString()) {
      if (neighborNode === 'z') {
        console.log({ distance: distance + 1 });
        // return distance + 1;
      }
    }
  }

  //   console.dir(
  //     {
  //       visited: Array.from(visited).sort((a: string, b: string) => {
  //         a = a.split(',')[0];
  //         b = b.split(',')[0];
  //         return Number(a) - Number(b);
  //       }),
  //     },
  //     { maxArrayLength: null },
  //   );
};
