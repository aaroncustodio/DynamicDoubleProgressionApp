import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MuscleGroup } from 'src/app/enums/MuscleGroup';
import { Unit } from 'src/app/enums/Unit';
import { Workout } from 'src/app/models/Workout';

@Component({
  selector: 'app-workout-editor',
  templateUrl: './workout-editor.component.html',
  styleUrls: ['./workout-editor.component.scss']
})
export class WorkoutEditorComponent implements OnInit {

  workoutForm: FormGroup;
  workout: Workout = {
    id: '',
    name: '',
    workoutExercises: [
      {
        currentWeight: {
          amount: 0,
          unit: Unit.Pounds
        },
        exercise: {
          id: '',
          name: '',
          targetMuscleGroup: MuscleGroup.Abs
        },
        sets: 1,
        targetRepRange: {
          max: 1,
          min: 1
        }
      }
    ]
  };

  constructor(
    private _formBuilder: FormBuilder
  ) {
    this.workoutForm = _formBuilder.group({
      name: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // let workout = this.workoutForm.value;
    console.log(this.workoutForm.value);
    // this._exerciseService.addExercise(workout);
  }
}
