import { MuscleGroup } from "../enums/MuscleGroup";

export interface Exercise {
    id: string;
    name: string;
    targetMuscleGroup: MuscleGroup;
}
