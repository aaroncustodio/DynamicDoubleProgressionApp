import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkoutLoggerModule } from './workout-logger/workout-logger.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WorkoutLoggerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
