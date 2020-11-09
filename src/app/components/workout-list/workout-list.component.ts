import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ExerciseService } from 'src/app/services/exercise.service';
import { WorkoutService } from 'src/app/services/workout.service';
import { Workout } from '../../models/workout'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.scss']
})
export class WorkoutListComponent implements OnInit {

  loading = false;

  workouts: Workout[] = [];
  step = 0;


  constructor(public auth: AuthenticationService, private workoutService: WorkoutService, private exerciseService: ExerciseService) { }

  stepChanged($event) {
    this.step = $event;
  }

  ngOnInit() {
    this.loading = true;
    this.workoutService
      .getAllWorkouts()
      .pipe(first())
      .subscribe(
        data => {
          this.workouts = data;
          if (this.workouts.length == 0) {
            this.loading = false;
            return;
          }
          this.workouts.forEach((workout, index) => {
            this.exerciseService
              .getByWorkout(workout._id)
              .pipe(first())
              .subscribe(
                data => {
                  this.workouts[index].exercises = data;
                  this.loading = false;
                }
              );
          });
        }
    );
  }
}
