import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { ExerciseService } from '../../services/exercise.service';
import { Workout } from '../../models/workout';
import { WorkoutService } from '../../services/workout.service';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';
import { Exercise } from '../../models/exercise';
import { Component, OnInit, Input } from '@angular/core';
import { first } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-create-workout',
  templateUrl: './create-workout.component.html',
  styleUrls: ['./create-workout.component.scss'],
})
export class CreateWorkoutComponent implements OnInit {
  step = 0;

  @Input()
  title: string;
  @Input()
  description: string;
  @Input()
  exercise: string;
  @Input()
  exerciseDescription: string;
  @Input()
  set: number;
  @Input()
  reps: string;

  createExerciseForm: FormGroup;
  currentExerciseForm: FormGroup;
  error: any;
  loading = false;
  currentExercise: Exercise;

  constructor(
    private formBuilder: FormBuilder,
    private workoutService: WorkoutService,
    private exerciseService: ExerciseService,
    private auth: AuthenticationService,
    private router: Router,
  ) {}

  ngOnInit() {
  }

  createWorkout() {
    this.workoutService.create(this.title, this.description, this.exercise, this.exerciseDescription, this.set, this.reps).pipe(first()).subscribe();
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}