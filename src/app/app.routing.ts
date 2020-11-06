import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginPageComponent } from './pages/login/login.page';
import { RegisterPageComponent } from './pages/register/register.page';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegisterPageComponent },

    // otherwise redirect to home
    /*
    { path: '**', redirectTo: '' }
    */
];

export const appRoutingModule = RouterModule.forRoot(routes);