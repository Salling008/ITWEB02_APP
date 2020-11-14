import { Component, Input, OnInit, Output } from '@angular/core';
import { Workout } from '../../models/workout'
import { WorkoutService } from '../../services/workout.service';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
  
export class WorkoutComponent implements OnInit {
  @Input()
  workout: Workout;
    
  constructor(private workoutService: WorkoutService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() { }
  
  deleteWorkout() {
    this.workoutService.deleteWorkout(this.workout._id).pipe(first()).subscribe();
  }
}
