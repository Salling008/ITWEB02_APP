import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { title } from 'process';
import { environment } from 'src/environments/environment';
import { Workout } from '../models/workout';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private httpClient: HttpClient, private auth: AuthenticationService ) { }

  getAllWorkouts() {
    return this.httpClient.get<Workout[]>(`${environment.URL}/workout`);
  }

  getAllCompletedWorkouts() {
    return this.httpClient.get<Workout[]>(`${environment.URL}/completedworkouts?id=` + this.auth.currentUserValue.id); 
  }
 
  deleteWorkout(workoutId: string) {
    return this.httpClient.delete<any>(
      `${environment.URL}/deleteWorkout?id=${workoutId}`,
    );
  }

  addWorkoutToCompletedList(workoutId: string) {
    return this.httpClient.post<any>(
      `${environment.URL}/addToCompleteList`, {
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
    return this.httpClient.post<any>(`${environment.URL}/createworkout`, {
      'title': title,
      'description': description,
      'exercise': exercise,
      'exerciseDescription': exerciseDescription,
      'set': set,
      'reps': reps
    });
  }
}