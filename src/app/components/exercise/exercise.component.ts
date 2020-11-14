import { Component, Input, OnInit } from '@angular/core';
import { Exercise } from '../../models/exercise'

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
  
export class ExerciseComponent implements OnInit {
  @Input()
  exercise: Exercise;
    
  constructor() { }

  ngOnInit() { }
}
