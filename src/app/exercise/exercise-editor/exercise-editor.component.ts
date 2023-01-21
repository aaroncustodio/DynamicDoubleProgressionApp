import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ExerciseService } from 'src/app/services/exercise.service';

@Component({
  selector: 'app-exercise-editor',
  templateUrl: './exercise-editor.component.html',
  styleUrls: ['./exercise-editor.component.scss']
})
export class ExerciseEditorComponent implements OnInit {

  exerciseForm = new FormGroup({
    name: new FormControl('')
  });

  constructor(
    private _exerciseService: ExerciseService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    let exercise = this.exerciseForm.value;
    // exercise.id = self.crypto['randomUUID']();

    this._exerciseService.addExercise(exercise);
  }
}
