import { Component, Input, OnInit, Output } from '@angular/core';
import { Workout } from '../../models/workout'
import { WorkoutService } from '../../services/workout.service';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
  
export class WorkoutComponent implements OnInit {
  @Input()
  workout: Workout;
    
  constructor(private workoutService: WorkoutService, public auth: AuthenticationService) {
   }

  ngOnInit() {
  }
  
  deleteWorkout() {
    this.workoutService.deleteWorkout(this.workout._id).pipe(first()).subscribe();
  }

  addToCompletedList() {
    this.workoutService.addWorkoutToCompletedList(this.workout._id).pipe(first()).subscribe();
  }
}
