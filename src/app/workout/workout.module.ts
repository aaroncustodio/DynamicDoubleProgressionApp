import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutComponent } from 'src/app/workout/workout.component';
import { WorkoutEditorComponent } from './workout-editor/workout-editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WorkoutExerciseEditorComponent } from './workout-exercise-editor/workout-exercise-editor.component';

@NgModule({
  declarations: [
    WorkoutComponent,
    WorkoutEditorComponent,
    WorkoutExerciseEditorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class WorkoutModule { }
