import { Exercise } from "src/app/models/Exercise";
import { Weight } from "src/app/models/Weight";

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
