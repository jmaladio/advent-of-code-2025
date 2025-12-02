const MIN_LIMIT = 0;
const MAX_LIMIT = 99;
const STARTING_POSITION = 50;

class CircularList {
  private readonly minLimit = MIN_LIMIT;
  private readonly maxLimit = MAX_LIMIT;
  private readonly startingPosition = STARTING_POSITION;
  
  private currentPosition = this.startingPosition;
  private currentZeroClics = 0;
  
  public goLeft(): void {
    if (this.currentPosition === this.minLimit) {
      this.currentPosition = this.maxLimit;
    } else {
      this.currentPosition -= 1;
      this.updateZeroClics();
    }
  }
  
  public goRight(): void {
    if (this.currentPosition === this.maxLimit) {
      this.currentPosition = this.minLimit;
      this.updateZeroClics();
    } else {
      this.currentPosition += 1;
    }
  }
  
  public goInstruction(direction: 'L' | 'R', steps: number) {
    if (direction === 'L') {
      for (let i = 1; i <= steps; i++) {
        this.goLeft();
      }
    }
    else if (direction === 'R') {
      for (let i = 1; i <= steps; i++) {
        this.goRight();
      }
    }
    else {
      throw new Error(`'direction' argument must be one of the following: 'L', 'R'. Received: '${direction}'`);
    }
  }
  
  public updateZeroClics(): void {
    if (this.currentPosition === 0) {
      this.currentZeroClics += 1;
    } 
  }
  
  public getCurrentPosition(): number {
    return this.currentPosition;
  }
  
  public getCurrentZeroClics(): number {
    return this.currentZeroClics;
  }
}

export default CircularList;