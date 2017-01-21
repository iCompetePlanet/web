import {Component, OnInit} from '@angular/core';
import {UserPreferencesService} from '../services/user-preferences.service';
import {Stopwatch} from '../utils/stopwatch';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
  providers: [UserPreferencesService]
})
export class StopwatchComponent implements OnInit {
  private static readonly FONT_PREF_KEY: string = 'stopwatchFontSize';

  totalTime: number = 0;
  stopwatchFontSize: number = 4;
  interval: any;
  stopwatchIsStarted: boolean = false;
  stopwatch: Stopwatch = new Stopwatch();
  laps: Array<any>;

  constructor(private userPrefsService: UserPreferencesService) {
  }

  ngOnInit() {
    this.resetValues();
    this.stopwatchFontSize = this.userPrefsService.getPref(StopwatchComponent.FONT_PREF_KEY) || 4;
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
    this.stopwatchFontSize += 1;
    this.userPrefsService.setPref(StopwatchComponent.FONT_PREF_KEY, this.stopwatchFontSize);
  }

  onTotalTimeFontSizeMinusClicked() {
    if (this.stopwatchFontSize > 1) {
      this.stopwatchFontSize -= 1;
      this.userPrefsService.setPref(StopwatchComponent.FONT_PREF_KEY, this.stopwatchFontSize);
    }
  }
}
