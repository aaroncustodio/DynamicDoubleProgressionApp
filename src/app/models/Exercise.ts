import { MuscleGroup } from "src/app/enums/MuscleGroup";

export interface Exercise {
    id: string;
    name: string;
    targetMuscleGroup: MuscleGroup;
}
