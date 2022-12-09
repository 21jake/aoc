import input from './input.js';

export const parsed = input.split('\n').filter((e) => Boolean(e));
const head = [0, 0];
const tail = [0, 0];
const visited = new Set();
visited.add(head.join(','));

export const headTailAreClose = (h, t) => {
  const sameXorY = h[0] === t[0] || h[1] === t[1];
  if (sameXorY) {
    return Math.abs(h[0] - t[0]) + Math.abs(h[1] - t[1]) <= 1;
  } else {
    // close diagonally
    const xDiff = Math.abs(h[0] - t[0]);
    const yDiff = Math.abs(h[1] - t[1]);
    return xDiff === yDiff && xDiff === 1;
  }
};

 const tailChaseHead = (h, t) => {
  if (h[0] === t[0]) {
    if (h[1] > t[1]) {
      t[1]++;
    } else {
      t[1]--;
    }
  } else if (h[1] === t[1]) {
    if (h[0] > t[0]) {
      t[0]++;
    } else {
      t[0]--;
    }
  } else if (h[0] > t[0] && h[1] > t[1]) {
    t[0]++;
    t[1]++;
  } else if (h[0] > t[0] && h[1] < t[1]) {
    t[0]++;
    t[1]--;
  } else if (h[0] < t[0] && h[1] > t[1]) {
    t[0]--;
    t[1]++;
  } else if (h[0] < t[0] && h[1] < t[1]) {
    t[0]--;
    t[1]--;
  }

  visited.add(t.join(','));
};

export default () => {
  const handleMoveHead = (direction: string, step: string) => {
    for (let index = 0; index < Number(step); index++) {
      if (direction === 'U') {
        head[1] += 1;
      } else if (direction === 'D') {
        head[1] -= 1;
      } else if (direction === 'L') {
        head[0] -= 1;
      } else if (direction === 'R') {
        head[0] += 1;
      }

      // console.log({ head, tail });

      if (!headTailAreClose(head, tail)) {
        tailChaseHead(head, tail);
      }
      console.log({ head, tail });
    }
  };

  for (let i = 0; i < parsed.length; i++) {
    const [direction, step] = parsed[i].split(' ');
    handleMoveHead(direction, step);
  }

  console.log({ visited, size: visited.size });
};
