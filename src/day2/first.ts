import input from './input.js';

export enum FirstColumn {
  ROCK = 'A',
  PAPER = 'B',
  SCIS = 'C',
}
export enum SecondColumn {
  ROCK = 'X',
  PAPER = 'Y',
  SCIS = 'Z',
}

export const firstColScoreMapping = {
  [FirstColumn.ROCK]: 1,
  [FirstColumn.PAPER]: 2,
  [FirstColumn.SCIS]: 3,
};

export const secondColScoreMapping = {
  [SecondColumn.ROCK]: 1,
  [SecondColumn.PAPER]: 2,
  [SecondColumn.SCIS]: 3,
};

const gameLogicScoreMapping = {
  [FirstColumn.ROCK]: {
    [SecondColumn.ROCK]: 3,
    [SecondColumn.PAPER]: 6,
    [SecondColumn.SCIS]: 0,
  },
  [FirstColumn.PAPER]: {
    [SecondColumn.ROCK]: 0,
    [SecondColumn.PAPER]: 3,
    [SecondColumn.SCIS]: 6,
  },
  [FirstColumn.SCIS]: {
    [SecondColumn.ROCK]: 6,
    [SecondColumn.PAPER]: 0,
    [SecondColumn.SCIS]: 3,
  },
};

export const parseInput = () => {
  const parseInput = input
    .split('\n')
    .filter((e) => Boolean(e))
    .map((e) => e.split(' '));
  return parseInput;
};

const getScore = () => {
  const parsed = parseInput();
  let total = 0;
  for (const [first, second] of parsed) {
    const shapeSelectedScore = secondColScoreMapping[second as SecondColumn];
    const outcomeScore =
      gameLogicScoreMapping[first as FirstColumn][second as SecondColumn];
    
    total += shapeSelectedScore + outcomeScore;
  }
  console.log({ total });

  return total;
};

export default () => {
  getScore();
};
