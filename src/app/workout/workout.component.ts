import { Component, OnInit } from "@angular/core";
import { Workout } from "src/app/models/Workout";
import { WorkoutService } from "src/app/services/workout.service";

@Component({
    selector: 'app-workout',
    templateUrl: './workout.component.html',
    styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {

    workouts: Array<Workout> = [];

    constructor(
        private _workoutService: WorkoutService
    ) { }

    ngOnInit(): void {
        this.getWorkouts();
    }

    getWorkouts(): void {
        this.workouts = this._workoutService.getWorkouts();
    }
}
