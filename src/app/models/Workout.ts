import { WorkoutExercise } from "src/app/models/WorkoutExercise";

export interface Workout {
    name: string;
    workoutExercises: Array<WorkoutExercise>;
}
