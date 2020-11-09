import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exercise } from '../models/exercise';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private httpClient: HttpClient) { }

    getByWorkout(workoutId: string) {
    return this.httpClient.get<Exercise[]>(
      'http://localhost:3000/workout?id='+ workoutId,
    );
  }
}
