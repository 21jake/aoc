import { real as test } from './input.js';

export default () => {
  const keys = Object.keys(test)
    .map((e) => Number(e))
    .sort((a, b) => a - b);

  let round = 1;
  let productOfAllDivisors = 1;
  const records = {};
  keys.forEach((k) => {
    records[k] = 0;
    productOfAllDivisors *= test[k].test;
  });

  const part1 = 20;
  const part2 = 10_000;

  while (round <= part2) {
    for (let index = keys[0]; index <= keys[keys.length - 1]; index++) {
      const { startingItems, op, test: testNumber, output } = test[index];

      let [_op] = op;

      const clone = [...startingItems];

      clone.forEach((item) => {
        let multiplier = op[1] || item;

        let result = _op === 'MUL' ? item * multiplier : item + multiplier;

        const isDivisible = result % (testNumber) === 0;
        const targetMonkeyToPassTo = output[Number(isDivisible)];
        test[targetMonkeyToPassTo].startingItems.push(
          result % productOfAllDivisors,
        );

        test[index].startingItems.shift();
        records[index] += 1;
      });
    }

    round++;
  }

  console.log({ records });
};
