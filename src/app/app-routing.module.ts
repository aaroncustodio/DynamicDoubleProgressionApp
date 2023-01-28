import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseComponent } from 'src/app/exercise/exercise.component';
import { SettingsComponent } from 'src/app/settings/settings.component';
import { WorkoutLoggerComponent } from 'src/app/workout-logger/workout-logger.component';

const routes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'workout-logger',
    component: WorkoutLoggerComponent
  },
  {
    path: 'exercises',
    component: ExerciseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
