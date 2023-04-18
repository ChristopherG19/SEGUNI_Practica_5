import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CheckLoginGuard } from './guards/check-login.guard';
import { DashboardEditComponent } from './dashboard-edit/dashboard-edit.component';

const routes: Routes = [
  { 
    path: '', component: LoginComponent
  },
  { 
    path: 'dashboard', component: DashboardComponent, 
    canActivate: [CheckLoginGuard]
  },
  {
    path: 'dashboard-edit', component: DashboardEditComponent
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
