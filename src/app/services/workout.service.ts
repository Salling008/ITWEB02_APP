import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Workout } from '../models/workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private httpClient: HttpClient) { }

  getAllWorkouts() {
    return this.httpClient.get<Workout[]>('http://localhost:3000/workout');
  }
}
