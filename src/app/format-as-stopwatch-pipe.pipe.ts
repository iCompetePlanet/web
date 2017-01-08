import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatAsStopwatchPipe'
})
export class FormatAsStopwatchPipePipe implements PipeTransform {
  static readonly HOURS_PER_MILLIS: number = 3600000;
  static readonly MINUTES_PER_MILLIS: number = 60000;
  static readonly SECONDS_PER_MILLIS: number = 1000;

  transform(value: number): string {
    const hours = Math.floor(value / FormatAsStopwatchPipePipe.HOURS_PER_MILLIS);
    let remainder = value % FormatAsStopwatchPipePipe.HOURS_PER_MILLIS;

    const minutes = Math.floor(remainder / FormatAsStopwatchPipePipe.MINUTES_PER_MILLIS);
    remainder %= FormatAsStopwatchPipePipe.MINUTES_PER_MILLIS;

    const seconds = Math.floor(remainder / FormatAsStopwatchPipePipe.SECONDS_PER_MILLIS);
    remainder %= FormatAsStopwatchPipePipe.SECONDS_PER_MILLIS;

    const tenths = Math.round(remainder / 100);

    return `${hours}:${this.formattedNumber(minutes)}:${this.formattedNumber(seconds)}.${tenths}`;
  };

  formattedNumber(num: number): string {
    let str = num.toString();
    if (num > -1 && num < 10) {
      str = `0${str}`;
    }
    return str;
  }

}
