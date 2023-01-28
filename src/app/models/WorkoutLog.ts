import { ExerciseLog } from "src/app/models/ExerciseLog";
import { Workout } from "src/app/models/Workout";

export interface WorkoutLog {
    weekCode: string;
    workout: Workout;
    date: Date;
    exerciseLogs: Array<ExerciseLog>;
}
