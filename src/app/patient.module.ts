import { AgePipe } from './pipe/age.pipe';
import { FiltroPipe } from './pipe/filtro.pipe';
import { HomeComponent } from './pages/home/home.component';
import { PatientService } from './services/patient.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientComponent } from './pages/patient/patient.component';
import { PatientsTableComponent } from './components/patients-table/patients-table.component';

@NgModule({
  declarations: [
    PatientComponent,
    PatientsTableComponent,
    HomeComponent,
    FiltroPipe,
    AgePipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PatientComponent,
    HomeComponent,
    FiltroPipe,
    AgePipe
  ],
  providers: [
    PatientService
  ]
})
export class PaginaPatientModule { }
