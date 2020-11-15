import { Component, OnInit } from '@angular/core';
import { Workout } from '../../models/workout'
import { AuthenticationService } from 'src/app/services/authentication.service';
import { WorkoutService } from 'src/app/services/workout.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {

  workouts: Workout[] = [];

  constructor(public auth: AuthenticationService, private workoutService: WorkoutService,) { }

  ngOnInit(): void {
    this.workoutService
      .getAllCompletedWorkouts()
      .pipe(first())
      .subscribe(
        data => {
          this.workouts = data;
            return;
        }
    );
  }

}
