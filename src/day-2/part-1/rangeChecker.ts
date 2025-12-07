import { IRange } from "./range.interface";

class RangeChecker {
  public findInvalidIDs(range: IRange) {
    let { start, end } = range;
    const invalidIDsList: number[] = [];
    if (!this.isValidRange(range)) {
      return invalidIDsList;
    }

    const digitsLength = range.start.toString().length;

    if (digitsLength % 2 !== 0) {
      start = Number("1" + "0".repeat(digitsLength));
    }

    let targetID = Number(range.start.toString().slice(0, digitsLength / 2));
    let inRange = true;

    while (inRange) {
      const possibleInvalidID = Number(
        targetID.toString() + targetID.toString()
      );

      if (possibleInvalidID < start) {
        targetID++;
        continue;
      }

      if (possibleInvalidID >= start && possibleInvalidID <= end) {
        targetID++;
        invalidIDsList.push(possibleInvalidID);
        continue;
      }

      inRange = false;
    }

    return invalidIDsList;
  }

  private isValidRange(range: IRange) {
    return range.start <= range.end;
  }
}

export default RangeChecker;
