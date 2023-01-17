import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutLoggerComponent } from './workout-logger.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    WorkoutLoggerComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatButtonModule,
    BrowserAnimationsModule,
  ]
})
export class WorkoutLoggerModule { }
