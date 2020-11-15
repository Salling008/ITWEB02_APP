import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { WorkoutService } from 'src/app/services/workout.service';
import { Workout } from '../../models/workout'

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.scss']
})
export class WorkoutListComponent implements OnInit {

  workouts: Workout[] = [];

  constructor(public auth: AuthenticationService, private workoutService: WorkoutService) { }

  ngOnInit() {
    this.workoutService
      .getAllWorkouts()
      .pipe(first())
      .subscribe(
        data => {
          this.workouts = data;
            return;
        }
    );
  }
}
