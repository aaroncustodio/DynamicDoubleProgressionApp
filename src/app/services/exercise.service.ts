import { Injectable } from '@angular/core';
import { MuscleGroup } from 'src/app/enums/MuscleGroup';
import { Exercise } from 'src/app/models/Exercise';

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
    exercise.id = this.generateNewId();
    this._exercises.push(exercise);
  }

  private generateNewId(): string {
    return (this._exercises.length + 1).toString();
  }

  private populateExercises(): void {
    this._exercises = [
      {
        id: '1',
        name: 'Bench Press',
        targetMuscleGroup: MuscleGroup.Chest
      },
      {
        id: '2',
        name: 'Shoulder Press',
        targetMuscleGroup: MuscleGroup.Shoulders
      },
      {
        id: '3',
        name: 'Dips',
        targetMuscleGroup: MuscleGroup.Chest
      },
      {
        id: '4',
        name: 'Incline Skullcrushers',
        targetMuscleGroup: MuscleGroup.Triceps
      },
      {
        id: '5',
        name: 'Dumbbell Lateral Raise',
        targetMuscleGroup: MuscleGroup.Shoulders
      },
      {
        id: '6',
        name: 'Triceps Pressdown',
        targetMuscleGroup: MuscleGroup.Triceps
      },
      {
        id: '7',
        name: 'Lat Pulldown',
        targetMuscleGroup: MuscleGroup.Back
      },
      {
        id: '8',
        name: 'Seated Cable Row',
        targetMuscleGroup: MuscleGroup.Back
      },
      {
        id: '9',
        name: 'Cable Pullover',
        targetMuscleGroup: MuscleGroup.Back
      },
      {
        id: '10',
        name: 'Hammer Cheat Curl',
        targetMuscleGroup: MuscleGroup.Biceps
      },
      {
        id: '11',
        name: 'Incline Dumbbell Curl',
        targetMuscleGroup: MuscleGroup.Biceps
      },
    ]
  }
}
