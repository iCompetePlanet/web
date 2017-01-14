import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  totalTime: number = 0;
  intervalTime: number = 0;
  interval: any;
  stopwatchIsStarted: boolean = false;
  startTime: number;
  laps: Array<number> = [];

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
    this.startTime = new Date().getTime();
    this.interval = setInterval(() => {
      this.totalTime = this.intervalTime + (new Date().getTime() - this.startTime);
    }, 100);
  }

  onStopClicked(): void {
    clearInterval(this.interval);
    this.intervalTime += new Date().getTime() - this.startTime;
    console.log('Stopping stopwatch');
    this.stopwatchIsStarted = false;
  }

  onResetClicked(): void {
    console.log('Clearing stopwatch');
    this.onStopClicked();
    this.resetValues();
  }

  onLapClicked(): void {
    this.laps.push(this.totalTime);
    console.log('Laps are: ', this.laps);
  }
}
