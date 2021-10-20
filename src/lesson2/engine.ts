import { ParsedLineType, parser } from "./parser";
import { isNumber } from "./helpers";
import {
  mathOperators,
  mathPriorities,
  mathOperatorsPriorities,
} from "./mathOperators";

const [FIRST, SECOND] = mathPriorities;

export const firstPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];

    if (
      (!isNumber(String(item)) && mathOperatorsPriorities[item] === FIRST) ||
      (mathOperatorsPriorities[nextItem] === FIRST && nextItem === "**")
    ) {
      if (!mathOperators[item]) {
        throw new TypeError("Unexpected stack!");
      }
      result = [
        ...result.slice(0, -2),
        mathOperators[item](Number(prevItem), Number(nextItem)),
      ];
    } else {
      result.push(nextItem);
    }

    return result;
  }, []);

export const secondPrioritiesCalc = (stack: ParsedLineType): number =>
  stack.reduce<number>((result, nextItem, key) => {
    const item = stack[key - 1];

    if (mathOperatorsPriorities[item] === FIRST) {
      throw new TypeError("Unexpected stack!");
    }

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === SECOND) {
      result = mathOperators[item](Number(result), Number(nextItem));
    }

    return result;
  }, Number(stack[0]));

export const bracketsCalc = (line: string): string => {
  const bracketsArray = line.match(/\(([^\(\)]+)\)/g);

  if (bracketsArray !== null) {
    const bracketsCalc = bracketsArray.map((item: string) => {
      const mathString = item.replace(/\(|\)/g, "");
      const stack: ParsedLineType | null = parser(mathString);

      if (stack === null) {
        throw new TypeError("Unexpected stack!");
      }

      const firstPrioritiesRes = firstPrioritiesCalc(stack);
      return secondPrioritiesCalc(firstPrioritiesRes);
    });

    bracketsCalc.forEach((item: number) => {
      line = line.replace(/\(([^\(\)]+)\)/, item.toString());
    });
  }

  return line;
};
