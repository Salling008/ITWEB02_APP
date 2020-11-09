import { from } from 'rxjs';
import { Exercise } from './exercise'

export class Workout{
    _id: string;
    title: String;
    description: String;
    exercises: Exercise[];
}