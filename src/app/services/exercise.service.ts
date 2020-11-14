import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exercise } from '../models/exercise';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private httpClient: HttpClient) { }

addToWorkout(workoutId: string, exercise: Exercise) {
    return this.httpClient.post<Exercise>(
      `http://localhost:3000/addExercise?id=` + workoutId, {'exercise': exercise.exercise, 'exerciseDescription': exercise.description, 'set': exercise.set, 'reps': exercise.reps },
    );
  }



    getByWorkout(workoutId: string) {
    return this.httpClient.get<Exercise[]>(
      'http://localhost:3000/workout?id='+ workoutId,
    );
  }
}
