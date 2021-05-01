import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
/* Modules */
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';
/* Components */
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


const routes:Routes = [
  { path: '', redirectTo: '/dashboard' , pathMatch:'full'},
  { path:'**', component: NopagefoundComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
