import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { title } from 'process';
import { Workout } from '../models/workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private httpClient: HttpClient) { }

  getAllWorkouts() {
    return this.httpClient.get<Workout[]>('http://localhost:3000/workout');
  }

    getById(workoutId: string) {
    return this.httpClient.get<Workout>(
      'http://localhost:3000/workout?=${workoutId}',
    );
    }
    
  create(
    title: String,
    description: String,
    exercise: String,
    exerciseDescription: String,
    set: Number,
    reps: String)
  {
    return this.httpClient.post<any>(`http://localhost:3000/createworkout`, {
      'title': title,
      'description': description,
      'exercise': exercise,
      'exerciseDescription': exerciseDescription,
      'set': set,
      'reps': reps
    });
  }
}