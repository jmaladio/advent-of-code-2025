import * as fs from "fs";
import * as path from "path";
import RangeChecker from "./rangeChecker";
import { IRange } from "./range.interface";

const inputPath = path.join(__dirname, "user-input.txt");
const fileContent = fs.readFileSync(inputPath, "utf-8");
const userInput = fileContent.trim().split(",");

function parseRangesList(rangesList: string[]) {
  return rangesList.map((range) => {
    const [start, end] = range.split("-").map(Number);
    return { start, end };
  });
}

const exampleRangesList = [
  "11-22",
  "95-115",
  "998-1012",
  "1188511880-1188511890",
  "222220-222224",
  "1698522-1698528",
  "446443-446449",
  "38593856-38593862",
  "565653-565659",
  "824824821-824824827",
  "2121212118-2121212124",
];

const rangeChecker = new RangeChecker();
const rangeList = parseRangesList(userInput);

let sumInvalidIDs = 0;

for (const range of rangeList) {
  const invalidIDs = rangeChecker.findInvalidIDs(range as IRange);
  console.log(
    `Range: ${range.start}-${range.end} | Invalid IDs: ${invalidIDs.join(", ")}`
  );

  invalidIDs.forEach((id) => {
    sumInvalidIDs += id;
  });
}

console.log(`Sum of invalid IDs: ${sumInvalidIDs}`);
