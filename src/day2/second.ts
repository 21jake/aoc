import {
  secondColScoreMapping,
  FirstColumn,
  SecondColumn,
  parseInput,
} from './first.js';

enum GameOutput {
  LOSE = 'X',
  DRAW = 'Y',
  WIN = 'Z',
}

const outputScoreMapping = {
  [GameOutput.LOSE]: 0,
  [GameOutput.DRAW]: 3,
  [GameOutput.WIN]: 6,
};

const secondColumnShapeSelectedMapping = {
  [FirstColumn.ROCK]: {
    [GameOutput.LOSE]: SecondColumn.SCIS,
    [GameOutput.DRAW]: SecondColumn.ROCK,
    [GameOutput.WIN]: SecondColumn.PAPER,
  },
  [FirstColumn.PAPER]: {
    [GameOutput.LOSE]: SecondColumn.ROCK,
    [GameOutput.DRAW]: SecondColumn.PAPER,
    [GameOutput.WIN]: SecondColumn.SCIS,
  },
  [FirstColumn.SCIS]: {
    [GameOutput.LOSE]: SecondColumn.PAPER,
    [GameOutput.DRAW]: SecondColumn.SCIS,
    [GameOutput.WIN]: SecondColumn.ROCK,
  },
};

export default () => {
    const parsed = parseInput();
    let total = 0;
    for (const [first, output] of parsed) {
        const secondColumnShape = secondColumnShapeSelectedMapping[first as FirstColumn][output as GameOutput];
        const shapeSelectedScore = secondColScoreMapping[secondColumnShape];
        const outcomeScore = outputScoreMapping[output as GameOutput];
        total += shapeSelectedScore + outcomeScore;
        console.log({shapeSelectedScore, outcomeScore});
        
    }
    console.log({ total });
    
    return total;   
}