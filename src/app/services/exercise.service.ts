import { Injectable } from '@angular/core';
import { Exercise } from '../models/Exercise';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private _exercises: Array<Exercise> = [];

  constructor() { }

  getExercises(): Array<Exercise> {
    return this._exercises;
  }

  addExercise(exercise: Exercise): void {
    this._exercises.push(exercise);
  }
}
