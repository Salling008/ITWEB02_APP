import { Component, Input, OnInit, Output } from '@angular/core';
import { Workout } from '../../models/workout'
import { WorkoutService } from '../../services/workout.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
  
export class WorkoutComponent implements OnInit {
  @Input()
  workout: Workout;
    
  constructor(private workoutService: WorkoutService) {
   }

  ngOnInit() {
  }
  
  deleteWorkout() {
    this.workoutService.deleteWorkout(this.workout._id).pipe(first()).subscribe();
  }
}
