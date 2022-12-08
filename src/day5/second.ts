import { parsedCommands, parseSingpleCommandIntoInput } from "./first.js";
import { stacks } from "./input.js";

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
  
      spliceItemsFromStack1ToStack2(stacks[from], stacks[to], count);
    }
    console.log(stacks);
  };
  