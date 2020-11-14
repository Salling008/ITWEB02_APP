import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { title } from 'process';
import { Workout } from '../models/workout';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private httpClient: HttpClient, private auth: AuthenticationService ) { }

  getAllWorkouts() {
    return this.httpClient.get<Workout[]>('http://localhost:3000/workout');
  }

  getAllCompletedWorkouts() {
    return this.httpClient.get<Workout[]>('http://localhost:3000/completedworkouts?id=' + this.auth.currentUserValue.id); 
  }

  getById(workoutId: string) {
    return this.httpClient.get<Workout>(
      'http://localhost:3000/workout?=${workoutId}',
    );
  }
  
  deleteWorkout(workoutId: string) {
    return this.httpClient.delete<any>(
      'http://localhost:3000/deleteWorkout?id='+ workoutId,
    );
  }

  addWorkoutToCompletedList(workoutId: string) {
    return this.httpClient.post<any>(
      'http://localhost:3000/addToCompleteList', {
        'userId': this.auth.currentUserValue.id,
        'workoutId': workoutId
      }
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
    return this.httpClient.post<any>('http://localhost:3000/createworkout', {
      'title': title,
      'description': description,
      'exercise': exercise,
      'exerciseDescription': exerciseDescription,
      'set': set,
      'reps': reps
    });
  }
}