import { parsed, headTailAreClose } from './first.js';

const snake = {
  '0': [0, 0], // head
  '1': [0, 0],
  '2': [0, 0],
  '3': [0, 0],
  '4': [0, 0],
  '5': [0, 0],
  '6': [0, 0],
  '7': [0, 0],
  '8': [0, 0],
  '9': [0, 0], // tail
};

const visited = new Set();
visited.add(snake[0].join(','));

const tailChaseHead = (h, t, isTail) => {
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

  if (isTail) {
    visited.add(t.join(','));
  }
};

const handleMoveHead = (direction: string, step: string) => {
  for (let index = 0; index < Number(step); index++) {
    if (direction === 'U') {
      snake[0][1] += 1;
    } else if (direction === 'D') {
      snake[0][1] -= 1;
    } else if (direction === 'L') {
      snake[0][0] -= 1;
    } else if (direction === 'R') {
      snake[0][0] += 1;
    }

    // console.log({snakeb4:snake})

    for (let j = 1; j < 10; j++) {
      if (!headTailAreClose(snake[j - 1], snake[j])) {
        const isTail = j === 9;

        tailChaseHead(snake[j - 1], snake[j], isTail);
      }
    }

    // console.log({ snake });

    //   if (!headTailAreClose(head, tail)) {
    //     tailChaseHead(head, tail);
    //   }
  }
};

export default () => {
  for (let i = 0; i < parsed.length; i++) {
    const [direction, step] = parsed[i].split(' ');
    handleMoveHead(direction, step);
  }
  console.log({ snake, size: visited.size });
  
};
