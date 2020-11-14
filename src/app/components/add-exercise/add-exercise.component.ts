import { Component, OnInit, Input } from '@angular/core';
import { Exercise } from 'src/app/models/exercise';
import { ExerciseService } from 'src/app/services/exercise.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.scss']
})
export class AddExerciseComponent implements OnInit {
  constructor(private exerciseService: ExerciseService, private activatedRoute: ActivatedRoute) { }
  @Input()
  exercise: Exercise;

  ngOnInit(): void {
  }

  addExerciseToWorkout(exercise: Exercise) {
    const workoutId: string = this.activatedRoute.snapshot.params.workoutId;
    this.exerciseService.addToWorkout(workoutId, exercise)
  }
}
