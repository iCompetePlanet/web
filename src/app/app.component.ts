import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  timeInMillis: number = 0;
  interval: any;
  stopwatchIsStarted = false;
  resetTime: boolean = true;
  startTime: number;

  constructor() {
  }

  startStopwatch(): void {
    console.log('Starting stopwatch');
    this.stopwatchIsStarted = true;
    if (this.resetTime) {
      this.startTime = new Date().getTime();
    }
    this.interval = setInterval(() => {
      this.timeInMillis = new Date().getTime() - this.startTime;
    }, 100);
  }

  stopStopwatch(): void {
    console.log('Stopping stopwatch');
    this.stopwatchIsStarted = false;
    this.resetTime = false;
    clearInterval(this.interval);
  }

  clearStopwatch(): void {
    console.log('Clearing stopwatch');
    this.stopStopwatch();
    this.timeInMillis = 0;
    this.resetTime = true;
  }
}
