import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseComponent } from 'src/app/exercise/exercise.component';
import { ExerciseEditorComponent } from 'src/app/exercise/exercise-editor/exercise-editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MuscleGroupStringPipe } from 'src/app/pipes/muscle-group.pipe';

@NgModule({
  declarations: [
    ExerciseComponent,
    ExerciseEditorComponent,
    MuscleGroupStringPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ExerciseModule { }
