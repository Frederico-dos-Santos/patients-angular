import { IPatient } from '../../interfaces/ipatient.service';
import { Component, OnInit} from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { catchError, filter, map, Observable, tap, toArray } from 'rxjs';

@Component({
  selector: 'patient-component',
  templateUrl: 'patient.component.html',
})
export class PatientComponent implements OnInit{ 

  patients$ = new Observable<IPatient[] | null>();
  constructor(private patientService: PatientService) {
    
  }

  ngOnInit() { 
    this.loadPatients();
  }

  private loadPatients () : void{
      this.patients$ = this.patientService.getPatients2$()
        .pipe(
          filter(patient => patient.nome.startsWith('J')),
          map(patient => {
            return {
              ...patient, 
              initial : patient.nome.substring(0, 1)
            };
          }),
          toArray(), 
          tap(patients => console.log(patients)),
          catchError((err, obs) => {
            console.log(err); 
            return obs;
          })
        );
  }

  public onAdd ($event : IPatient) : void{
    alert($event.nome);
  }
}
