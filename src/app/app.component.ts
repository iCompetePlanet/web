import {Component} from '@angular/core';
import {Stopwatch} from './utils/stopwatch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  totalTime: number = 0;
  totalTimeFontSize: number = 4;
  interval: any;
  stopwatchIsStarted: boolean = false;
  stopwatch: Stopwatch = new Stopwatch();
  laps: Array<number>;

  constructor() {
  }

  $ngOnInit() {
    this.resetValues();
  }

  resetValues(): void {
    this.totalTime = 0;
    this.laps = [];
  }

  onStartClicked(): void {
    console.log('Starting stopwatch');
    this.stopwatchIsStarted = true;
    this.stopwatch.start();
    this.interval = setInterval(() => {
      this.totalTime = this.stopwatch.getTime();
    }, 100);
  }

  onStopClicked(): void {
    console.log('Stopping stopwatch');
    clearInterval(this.interval);
    this.stopwatchIsStarted = false;
    this.stopwatch.stop();
  }

  onResetClicked(): void {
    console.log('Resetting stopwatch');
    this.onStopClicked();
    this.resetValues();
    this.stopwatch.reset();
  }

  onLapClicked(): void {
    this.laps = this.stopwatch.lap();
    console.log('Laps are: ', this.laps);
  }

  onTotalTimeFontSizePlusClicked() {
    this.totalTimeFontSize += 1;
  }

  onTotalTimeFontSizeMinusClicked() {
    if (this.totalTimeFontSize > 1) {
      this.totalTimeFontSize -= 1;
    }
  }
}
