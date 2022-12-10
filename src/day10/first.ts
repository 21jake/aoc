import input from './input.js';

export const parsed = input.split('\n').filter((e) => Boolean(e));

export default () => {

  let X = 1;
  let cycleCount = 0;
  let records = { '0': 1 };

  for (let index = 0; index < parsed.length; index++) {
    const command = parsed[index];
    if (command === 'noop') {
      cycleCount += 1;
      records[cycleCount] = X;
    } else {
      let [_, num] = command.split(' ');


      for (let j = 1; j < 3; j++) {
        if (j === 1) {
          cycleCount += 1;
          records[cycleCount] = X;
        } else {
          cycleCount += 1;
          X = X + Number(num);
          records[cycleCount] = X;
        }
      }
    }
  }

  const cycleToCheck = [20, 60, 100, 140, 180, 220];

  let output = 0;
  cycleToCheck.forEach((cycle) => {
    const signalStrength = cycle * records[cycle - 1];
    output += signalStrength;
  });

  console.log({ records, output });
  return { records, parsed };
};
