import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutCompleteComponent } from './workout-completed.component';

describe('WorkoutComponent', () => {
  let component: WorkoutCompleteComponent;
  let fixture: ComponentFixture<WorkoutCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
