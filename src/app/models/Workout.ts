import { WorkoutExercise } from "src/app/models/WorkoutExercise";

export interface Workout {
    id: string;
    name: string;
    workoutExercises: Array<WorkoutExercise>;
}
