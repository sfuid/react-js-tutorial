import { parser } from "./parser";

import {
  firstPrioritiesCalc,
  secondPrioritiesCalc,
  bracketsCalc,
} from "./engine";

export const runner = (line: string): number => {
  try {
    line = bracketsCalc(line);

    const stack = parser(line);

    if (stack === null) {
      throw new TypeError("Unexpected string");
    }

    const firstPrioritiesRes = firstPrioritiesCalc(stack);

    if (firstPrioritiesRes.length === 1) {
      return Number(firstPrioritiesRes[0]);
    }

    return secondPrioritiesCalc(firstPrioritiesRes);
  } catch (error) {
    console.error("Operation error");
    return -1;
  }
};
