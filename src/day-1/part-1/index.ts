import CircularList from "./circularList";
import * as fs from "fs";
import * as path from "path";

const circularList = new CircularList();

// Read the input file
const inputPath = path.join(__dirname, "user-input.txt");
const fileContent = fs.readFileSync(inputPath, "utf-8");
const userInput = fileContent.trim().split("\n");

function parseUserInput(inputList: string[]) {
  return inputList.map((input) => ({
    direction: input.charAt(0) as 'L' | 'R',
    steps: +input.slice(1),
  }));
}

const instructions = parseUserInput(userInput);

for (const { direction, steps} of instructions) {
  circularList.goInstruction(direction, steps);
}

console.log(`Total count of 0s: ${circularList.getCurrentZeroClics()}`);