import { bfs, endingPoint, parsed } from './first.js';

const startingPoints = [];
parsed.forEach((e, i) => {
  // Find all character a, push position to startingPoints
  for (let j = 0; j < e.length; j++) {
    const char = e[j];
    if (char === 'a') {
      startingPoints.push([i, j]);
    }
  }
});

export default () => {
  const distances = [];
  startingPoints.forEach((startingPoint) => {
    const distance = bfs(parsed, startingPoint);
    console.log({ distance });

    distances.push(distance);
  });
  console.log({ distances });
  const output = Math.min(...distances);
  console.log({ output });
};
