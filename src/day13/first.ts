import { officialInput, testInput } from './input.js';
import _ from 'lodash';

export function outputAnswers(
  testInput: string,
  officialInput: string,
  part1Solver: (input: string) => any,
  part2Solver: (input: string) => any,
) {
  console.log(`Answer for part 1 (test input): ` + part1Solver(testInput));
  console.log(`Answer for part 1: ` + part1Solver(officialInput));
  console.log(`Answer for part 2 (test input): ` + part2Solver(testInput));
  console.log(`Answer for part 2: ` + part2Solver(officialInput));
}

function parseInput(input: string) {
  return input
    .replace(/\n\n/g, '\n')
    .split('\n')
    .filter((e) => Boolean(e))
    .map((line) => JSON.parse(line));
}

const ensureArray = (item) => (Array.isArray(item) ? item : [item]);

/** Return < 0, 0, or > 0 depending on whether a should be sorted before b */
function compare(a, b): number {
  if (a == null) return -1;
  else if (b == null) return 1;
  else if (typeof a === 'number' && typeof b === 'number') return a - b;

  a = ensureArray(a);
  b = ensureArray(b);
  // loop over the indexes of the longer array and reduce to either zero or the first nonzero comparison of a and b's elements
  const output = _.range(Math.max(a.length, b.length)).reduce(
    (ret, _, i) => {
        console.log({ret, i, a, b})
        return (ret !== 0 ? ret : compare(a[i], b[i]));
    },
    0,
  );
//   console.log({ output });
  return output;
}

export default () => {
    outputAnswers(
      testInput,
      officialInput,
      // function that solves part 1
      (input: string) =>
        _.sum(
          // compare each pair, and map to either i + 1 (because the puzzle uses 1-indexing) or to 0 based on the result of compare
          _.chunk(parseInput(input), 2).map((pair, i) =>
            compare(pair[0], pair[1]) < 0 ? i + 1 : 0,
          ),
        ),
      // function that solves part 2
      (input: string) => {
        const decoders = [[[2]], [[6]]];
        let packets = parseInput(input).concat(decoders).sort(compare);
        return (
          (packets.indexOf(decoders[0]) + 1) * (packets.indexOf(decoders[1]) + 1)
        );
      },
    );


};
