import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { WorkoutExercise } from 'src/app/models/WorkoutExercise';

@Component({
  selector: 'app-workout-exercise-editor',
  templateUrl: './workout-exercise-editor.component.html',
  styleUrls: ['./workout-exercise-editor.component.scss']
})
export class WorkoutExerciseEditorComponent implements OnInit {

  @Input() workoutForm: FormGroup = new FormGroup({});
  @Input() workoutExercise: WorkoutExercise | undefined;

  constructor(
    private _parent: FormGroupDirective
  ) {
  }

  ngOnInit(): void {
    this.workoutForm = this._parent.control
    this.workoutForm.addControl('workoutExercise', new FormGroup({
      name: new FormControl('')
    }));
  }

  // private addGroupToParent(): void {
  //   this.workoutForm.addControl(
  //       'Workout Exercise',
  //       new FormControl('Name')
  //     );
  // }

  submitWorkoutExercise(): void {
    // this.workoutExercise.push(this.workoutExerciseForm.value);
  }
}
