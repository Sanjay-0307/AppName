import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPage } from './register-page/register-page';
import { LoginPage } from './login-page/login-page';
import { Homepage } from './homepage/homepage';
import { Parent } from './parent/parent';

const routes: Routes = [
 { path: 'home', component: Homepage },
  { path: 'register', component: RegisterPage },
  { path: 'login', component: LoginPage },
  { path: 'parent', component: Parent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
