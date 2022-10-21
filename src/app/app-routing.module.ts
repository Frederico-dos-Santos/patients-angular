import { ModuleWithProviders } from '@angular/core'
import { PatientComponent } from './pages/patient/patient.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'patients', component: PatientComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`  
 // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

export const RoutingModule: ModuleWithProviders<any> = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
