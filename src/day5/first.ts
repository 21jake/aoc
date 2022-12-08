import { commands, stacks } from './input.js';

export const parsedCommands = commands.split('\n').filter((e) => Boolean(e));
export const parseSingpleCommandIntoInput = (command: string) => {
  // Input: move 3 from 5 to 2
  // Output: { from: 5, to: 2, count: 3 }
  const [_, count, __, from, ___, to] = command.split(' ');
  return { from, to, count: Number(count) };
};

const moveItemsFromStack1ToStack2 = (
  stack1: any[],
  stack2: any[],
  itemCount: number,
) => {
  for (let i = 0; i < itemCount; i++) {
    stack2.push(stack1.pop());
  }
  return { stack1, stack2 };
};

const spliceItemsFromStack1ToStack2 = (
  stack1: any[],
  stack2: any[],
  itemCount: number,
) => {
    const items = stack1.splice(stack1.length - itemCount, itemCount);
    stack2.push(...items);
    return { stack1, stack2 };
};

export default () => {
  for (let index = 0; index < parsedCommands.length; index++) {
    const { from, to, count } = parseSingpleCommandIntoInput(
      parsedCommands[index],
    );

    moveItemsFromStack1ToStack2(stacks[from], stacks[to], count);
  }
  console.log(stacks);
};
