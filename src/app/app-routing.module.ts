import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { GamesComponent } from './games/games.component';
import { SkillsComponent } from './skills/skills.component';
import { ApplicationsComponent } from './applications/aplications.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'games', component: GamesComponent },
    { path: 'aplications', component: ApplicationsComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
