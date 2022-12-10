import firstFn from './first.js';

// @ts-ignore
const { records, parsed } = firstFn();

// disable typescript check for this line
// @ts-ignore
String.prototype._replaceAt = function (index, replacement) {
  return (
    this.substring(0, index) +
    replacement +
    this.substring(index + replacement.length)
  );
};

const recordsKeys = Object.keys(records).map((e) => Number(e));
const minKey = Math.min(...recordsKeys);
const maxKey = Math.max(...recordsKeys);


let screen = new String('');

const output = [];

const detectSprite = (cycle: number) => {
  const X = records[cycle - 1];
  const spriteIndexes = [X - 1, X, X + 1];
  const result = spriteIndexes.includes((cycle - 1) % 40);  
  return {result, cycle, X, spriteIndexes};
};

export default () => {
  //   for (let index = 0; index < 3; index++) {
  for (let index = 1; index <= maxKey; index++) {
    const { result, cycle, X, spriteIndexes } = detectSprite(index);
    if (result) {
      screen += '#';
    } else {
      screen += '.';
    }
    console.log({ result, cycle, X, spriteIndexes, screen });
    

    if (screen.length === 40) {
        output.push(screen);
        screen = '';
      }
    // screen = screen.replace(/X/g, '.');
  }

  console.log({ output });

  // screen = screen.replace(/X/g, '.');
};
