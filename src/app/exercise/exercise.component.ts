import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../services/exercise.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {

  constructor(
    private _exerciseService: ExerciseService
  ) { }

  ngOnInit(): void {

  }

  getExercises(): void {
    console.log(this._exerciseService.getExercises());
  }
}
