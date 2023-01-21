import { Exercise } from "./Exercise";
import { Set } from "./Set";


export interface ExerciseLog {
    exercise: Exercise;
    sets: Array<Set>;
    remarks?: string;
}
