import { Exercise } from "./Exercise";

export interface WorkoutExercise {
    exercise: Exercise;
    sets: number;
    currentWeightKg: number;
    currentWeightLb: number;
    targetRepRange: RepRange;
}

export interface RepRange {
    min: number;
    max: number;
}