import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Exercise } from '../models/exercise';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private httpClient: HttpClient) { }

  addToWorkout(workoutId: string, exercise: Exercise) {
      return this.httpClient.post<Exercise>(
        `${environment.URL}/addExercise?id=` + workoutId, {'exercise': exercise.exercise, 'exerciseDescription': exercise.description, 'set': exercise.set, 'reps': exercise.reps },
      );
  }

  getByWorkout(workoutId: string) {
    return this.httpClient.get<Exercise[]>(
      `${environment.URL}/workout?id=`+ workoutId,
    );
  }
}
