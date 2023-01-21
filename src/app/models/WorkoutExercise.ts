import { Exercise } from "./Exercise";
import { Weight } from "./Weight";

export interface WorkoutExercise {
    exercise: Exercise;
    sets: number;
    currentWeight: Weight;
    targetRepRange: RepRange;
}

export interface RepRange {
    min: number;
    max: number;
}
