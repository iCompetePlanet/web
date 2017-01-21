import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormatAsStopwatchPipePipe } from './pipes/format-as-stopwatch-pipe.pipe';
import { StopwatchComponent } from './stopwatch/stopwatch.component';

@NgModule({
  declarations: [
    AppComponent,
    FormatAsStopwatchPipePipe,
    StopwatchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
