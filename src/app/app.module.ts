import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { WorkoutComponent } from './components/workout/workout.component';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { CreateWorkoutComponent } from './components/create-workout/create-workout.component';
import { AddExerciseComponent } from './components/add-exercise/add-exercise.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    WorkoutComponent,
    WorkoutListComponent,
    ExerciseComponent,
    CreateWorkoutComponent,
    AddExerciseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
