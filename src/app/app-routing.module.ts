import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'
import { HomeComponent } from './components/home/home.component';
import { WorkoutComponent } from './components/workout/workout.component';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';
import { CreateWorkoutComponent } from './components/create-workout/create-workout.component';
import { AddExerciseComponent } from './components/add-exercise/add-exercise.component';

const routes: Routes = [
    {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'workoutlist',
    component: WorkoutListComponent,
  },
  {
    path: 'workout',
    children: [
      {
        path: ':workoutId',
        component: AddExerciseComponent
      }
    ]
  },
  {
    path: 'create',
    component: CreateWorkoutComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }