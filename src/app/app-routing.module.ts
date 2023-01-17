import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutLoggerComponent } from './workout-logger/workout-logger.component';

const routes: Routes = [
  {
    path: '',
    component: WorkoutLoggerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
