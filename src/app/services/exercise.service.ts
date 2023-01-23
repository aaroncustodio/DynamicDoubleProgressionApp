import { Injectable } from '@angular/core';
import { MuscleGroup } from '../enums/MuscleGroup';
import { Exercise } from '../models/Exercise';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private _exercises: Array<Exercise> = [];

  constructor() {
    this.populateExercises();
  }

  getExercises(): Array<Exercise> {
    return this._exercises;
  }

  addExercise(exercise: Exercise): void {
    this._exercises.push(exercise);
  }

  private populateExercises(): void {
    this._exercises = [
      {
        id: '',
        name: 'Bench Press',
        targetMuscleGroup: MuscleGroup.Chest
      },
      {
        id: '',
        name: 'Shoulder Press',
        targetMuscleGroup: MuscleGroup.Shoulders
      },
      {
        id: '',
        name: 'Dips',
        targetMuscleGroup: MuscleGroup.Chest
      },
      {
        id: '',
        name: 'Incline Skullcrushers',
        targetMuscleGroup: MuscleGroup.Triceps
      },
      {
        id: '',
        name: 'Dumbbell Lateral Raise',
        targetMuscleGroup: MuscleGroup.Shoulders
      },
      {
        id: '',
        name: 'Triceps Pressdown',
        targetMuscleGroup: MuscleGroup.Triceps
      },
      {
        id: '',
        name: 'Lat Pulldown',
        targetMuscleGroup: MuscleGroup.Back
      },
      {
        id: '',
        name: 'Seated Cable Row',
        targetMuscleGroup: MuscleGroup.Back
      },
      {
        id: '',
        name: 'Cable Pullover',
        targetMuscleGroup: MuscleGroup.Back
      },
      {
        id: '',
        name: 'Hammer Cheat Curl',
        targetMuscleGroup: MuscleGroup.Biceps
      },
      {
        id: '',
        name: 'Incline Dumbbell Curl',
        targetMuscleGroup: MuscleGroup.Biceps
      },
    ]
  }
}
