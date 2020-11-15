import { Component, OnInit, Input } from '@angular/core';
import { Exercise } from 'src/app/models/exercise';
import { ExerciseService } from 'src/app/services/exercise.service';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.scss']
})
export class AddExerciseComponent implements OnInit {
  constructor(private exerciseService: ExerciseService, private activatedRoute: ActivatedRoute) { }
  @Input()
  exercise: String;
  @Input()
  exerciseDescription: String;
  @Input()
  set: Number;
  @Input()
  reps: String;


  ngOnInit(): void {
  }

  addExerciseToWorkout() {
    const workoutId: string = this.activatedRoute.snapshot.params.workoutId;
    
    var exerciseToCreate: Exercise = {
      exercise: this.exercise,
      description: this.exerciseDescription,
      set: this.set,
      reps: this.reps
    }

    this.exerciseService.addToWorkout(workoutId, exerciseToCreate).pipe(first()).subscribe();
  }
}
