export enum MuscleGroup {
    Chest,
    Shoulders,
    Biceps,
    Triceps,
    Legs,
    Back,
    Glutes,
    Abs,
    Calves
}

export const MuscleGroupLabelMapping: Record<number, string> = {
    [MuscleGroup.Chest]: "Chest",
    [MuscleGroup.Shoulders]: "Shoulders",
    [MuscleGroup.Biceps]: "Biceps",
    [MuscleGroup.Triceps]: "Triceps",
    [MuscleGroup.Legs]: "Legs",
    [MuscleGroup.Back]: "Back",
    [MuscleGroup.Glutes]: "Glutes",
    [MuscleGroup.Abs]: "Abs",
    [MuscleGroup.Calves]: "Calves"
};
