import { Pipe, PipeTransform } from '@angular/core';
import { MuscleGroupLabelMapping } from 'src/app/enums/MuscleGroup';

@Pipe({ name: 'muscleGroupString' })
export class MuscleGroupStringPipe implements PipeTransform {

    MuscleGroupLabelMapping = MuscleGroupLabelMapping;

    transform(value: number): string {
        return MuscleGroupLabelMapping[value];
    }
}
