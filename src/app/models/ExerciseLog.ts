import { Exercise } from "src/app/models/Exercise";
import { Set } from "src/app/models/Set";


export interface ExerciseLog {
    exercise: Exercise;
    sets: Array<Set>;
    remarks?: string;
}
