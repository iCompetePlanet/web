export class Stopwatch {
  private totalTime: number;
  private intervalTime: number;
  private startTime: number;
  private laps: Array<any>;

  constructor() {
    this.resetValues();
  }

  start(): void {
    this.startTime = new Date().getTime();
  }

  stop(): void {
    this.intervalTime += new Date().getTime() - this.startTime;
  }

  reset(): void {
    this.resetValues();
  }

  lap(): Array<number> {
    this.laps.unshift({num: (this.laps.length + 1), time: this.getTime()});
    return this.laps;
  }

  getTime(): number {
    return this.intervalTime + (new Date().getTime() - this.startTime);
  }

  private resetValues(): void {
    this.totalTime = 0;
    this.intervalTime = 0;
    this.laps = [];
  }
}
