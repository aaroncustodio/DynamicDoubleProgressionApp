import { Component, OnInit } from '@angular/core';
import { Exercise } from 'src/app/models/Exercise';
import { ExerciseService } from 'src/app/services/exercise.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {

  exercises: Array<Exercise> = [];

  constructor(
    private _exerciseService: ExerciseService
  ) { }

  ngOnInit(): void {
    this.getExerciseList();
  }

  getExerciseList(): void {
    this.exercises = this._exerciseService.getExercises();
  }
}
