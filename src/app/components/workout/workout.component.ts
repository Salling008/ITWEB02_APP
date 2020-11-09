import { Component, Input, OnInit, Output } from '@angular/core';
import { Workout } from '../../models/workout'

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
  
  // TODO: Change me
  
export class WorkoutComponent implements OnInit {
  @Input()
  workout: Workout;
  @Input()
  step: number;
  @Input()
  i: number;
    
  constructor() { }

  ngOnInit(): void {
  }

    prevStep() {
    this.step--;
  }

    nextStep() {
    this.step++;
  }
}
