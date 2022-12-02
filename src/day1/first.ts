import { rawData } from './input.js';

export const parsedRawData = rawData.split('\n\n').map((group) =>
  group
    .split('\n')
    .filter(Boolean)
    .map((e) => Number(e)),
);

export const sumArray = parsedRawData.map((group) =>
  group.reduce((acc, curr) => acc + curr, 0),
);

export default () => {
  const max = Math.max(...sumArray);
  return max;
};
