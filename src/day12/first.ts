import { testInput, orderLevel, realInput } from './input.js';

const findCharOrderLevel = (char) => {
  const keys = Object.keys(orderLevel);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    if (orderLevel[key] === char) {
      return Number(key);
    }
  }
};

let startingPoint = [];
export let endingPoint = [];
// find "S" and "E" in the test input, mark them as starting and ending nodes using tuples
export const parsed = realInput.map((e, i) => {
  const startinggIndex = e.indexOf('S');
  const endingIndex = e.indexOf('E');
  if (startinggIndex !== -1) {
    startingPoint = [i, startinggIndex];
    e = e.replace('S', 'a');
  }
  if (endingIndex !== -1) {
    endingPoint = [i, endingIndex];
    e = e.replace('E', 'z');
  }
  return e;
});

export const bfs = (graph: string[], startingPoint: number[]) => {
  const queue = [];
  let output = Number.MAX_SAFE_INTEGER;
  queue.push({ position: startingPoint, distance: 0 });

  const visited = new Set();

  visited.add(startingPoint.toString());

  while (queue.length > 0) {
    const current = queue.shift();
    const { position, distance } = current;
    const [x, y] = position;

    const nodeChar = graph[x][y];
    const nodeOrderLevel = findCharOrderLevel(nodeChar);

    let nodeNeighbors = [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
    ];

    let filteredNeighbors = nodeNeighbors.filter((neighborNode) => {
      const [nx, ny] = neighborNode;

      const isVisited = visited.has(neighborNode.toString());

      const neighborNodeChar = graph[nx]?.[ny];
      const neighborNodeOrderLevel = findCharOrderLevel(neighborNodeChar);

      const neighborNodeOrderLevelAtmostOneLevelHigher =
        neighborNodeOrderLevel <= nodeOrderLevel + 1;

      if (isVisited) return false;
      return neighborNodeOrderLevelAtmostOneLevelHigher;
    });

    for (let index = 0; index < filteredNeighbors.length; index++) {
      const neighbor = filteredNeighbors[index];

      visited.add(neighbor.toString());

      const nodeDistance = distance + 1;

      if (neighbor.toString() === endingPoint.toString()) {
        output = nodeDistance < output ? nodeDistance : output;
      }

      queue.push({ position: neighbor, distance: nodeDistance });
    }
  }

  return output
};

export default () => {
  // Apply a BFS algorithm to find the shortest path from starting node to ending node

  const output = bfs(parsed, startingPoint);
  console.log({output});
  
};
