import { IPatient } from './../../interfaces/ipatient.service';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-patients-table',
  templateUrl: './patients-table.component.html',
  styleUrls: ['./patients-table.component.css']
})
export class PatientsTableComponent implements OnInit {

  @Input() patients: IPatient[] | null= [];
  @Output() add = new EventEmitter<IPatient>();
  constructor() { }

  ngOnInit(): void {
  }

  onAdd(patient : IPatient): void{
    this.add.emit(patient);
  }
}
