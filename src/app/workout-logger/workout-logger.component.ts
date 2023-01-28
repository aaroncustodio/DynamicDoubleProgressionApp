import { Component, OnInit } from '@angular/core';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-workout-logger',
  templateUrl: './workout-logger.component.html',
  styleUrls: ['./workout-logger.component.scss']
})
export class WorkoutLoggerComponent implements OnInit {

  constructor(
    private _workoutService: WorkoutService
  ) { }

  ngOnInit(): void {
    let workouts = this._workoutService.getWorkouts();
    console.log(workouts)
  }

}
