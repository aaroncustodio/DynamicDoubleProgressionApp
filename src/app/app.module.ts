import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { WorkoutLoggerModule } from 'src/app/workout-logger/workout-logger.module';
import { SidebarComponent } from 'src/app/sidebar/sidebar.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { ExerciseModule } from 'src/app/exercise/exercise.module';
import { SettingsComponent } from 'src/app/settings/settings.component';
import { MuscleGroupStringPipe } from 'src/app/pipes/muscle-group.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExerciseModule,
    WorkoutLoggerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
