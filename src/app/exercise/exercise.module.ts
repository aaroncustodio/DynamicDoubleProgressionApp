import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseComponent } from './exercise.component';
import { ExerciseEditorComponent } from './exercise-editor/exercise-editor.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ExerciseComponent,
    ExerciseEditorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ExerciseModule { }
