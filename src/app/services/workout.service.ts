import { Injectable } from '@angular/core';
import { Unit } from 'src/app/enums/Unit';
import { Workout } from 'src/app/models/Workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  private _workouts: Array<Workout> = [];

  constructor() { }

  getWorkouts(): Array<Workout> {
    return this._workouts;
  }

  addWorkout(workout: Workout): void {
    this._workouts.push(workout);
  }

  // getWorkout(): Workout {
  //   let result: Workout = {
  //     name: 'Workout 1',
  //     workoutExercises: [
  //       {
  //         exercise: {
  //           name: 'Shoulder Press'
  //         },
  //         currentWeight: {
  //           amount: 10,
  //           unit: Unit.Kilograms
  //         },
  //         sets: 3,
  //         targetRepRange: {
  //           min: 8,
  //           max: 10
  //         }
  //       }
  //     ]
  //   };
  //   return result;
  // }
}
