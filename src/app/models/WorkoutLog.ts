import { ExerciseLog } from "./ExerciseLog";
import { Workout } from "./Workout";

export interface WorkoutLog {
    weekCode: string;
    workout: Workout;
    date: Date;
    exerciseLogs: Array<ExerciseLog>;
}