import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MuscleGroup } from 'src/app/enums/MuscleGroup';
import { generateEnumDropdownValues } from 'src/app/helpers/enum-dropdown-helper';
import { ExerciseService } from 'src/app/services/exercise.service';

@Component({
  selector: 'app-exercise-editor',
  templateUrl: './exercise-editor.component.html',
  styleUrls: ['./exercise-editor.component.scss']
})
export class ExerciseEditorComponent implements OnInit {

  exerciseForm = new FormGroup({
    name: new FormControl(''),
    targetMuscleGroup: new FormControl(MuscleGroup.Chest)
  });

  muscleGroups: Array<number> = generateEnumDropdownValues(MuscleGroup);

  constructor(
    private _exerciseService: ExerciseService
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    let exercise = this.exerciseForm.value;

    this._exerciseService.addExercise(exercise);
  }
}
