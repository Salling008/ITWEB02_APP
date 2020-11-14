import { Component, Input, OnInit, Output } from '@angular/core';
import { Workout } from '../../models/workout'

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
  
export class WorkoutComponent implements OnInit {
  @Input()
  workout: Workout;
    
  constructor() { }

  ngOnInit() {}
}
