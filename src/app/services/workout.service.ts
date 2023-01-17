import { Injectable } from '@angular/core';
import { Workout } from '../models/Workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor() { }

  getWorkout(): Workout {
    let result: Workout = {
      name: 'Workout 1',
      workoutExercises: [
        {
          exercise: {
            name: 'Shoulder Press'
          },
          currentWeightLb: 100,
          currentWeightKg: 200,
          sets: 3,
          targetRepRange: {
            min: 8,
            max: 10
          }
        }
      ]
    };
    return result;
  }
}
