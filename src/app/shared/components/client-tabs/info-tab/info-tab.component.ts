import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-info-tab',
  templateUrl: './info-tab.component.html',
  styleUrls: ['./info-tab.component.scss']
})
export class InfoTabComponent implements OnInit {
  infoForm: FormGroup;

  personTypes = [
    {value: '0', viewValue: 'Física'},
    {value: '1', viewValue: 'Jurídica'}
  ];
  genderTypes = [
    {value: '0', viewValue: 'Masculino'},
    {value: '1', viewValue: 'Femenino'}
  ];
  documentTypes = [
    {value: '0', viewValue: 'CUIL'},
    {value: '1', viewValue: 'CUIT'},
    {value: '2', viewValue: 'DNI'},
    {value: '3', viewValue: 'PASAPORTE'}
  ];
  civilStatusTypes = [
    {value: '0', viewValue: 'Casado'},
    {value: '1', viewValue: 'Divorciado'},
    {value: '2', viewValue: 'Soltero'}
  ];
  occupationTypes = [
    {value: '0', viewValue: 'Empleado'},
    {value: '1', viewValue: 'Comerciante'},
    {value: '2', viewValue: 'Independiente'}
  ];
  positionTypes = [
    {value: '0', viewValue: 'Ingeniero'},
    {value: '1', viewValue: 'Gerente'},
    {value: '2', viewValue: 'Desarrollador'}
  ];

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.infoForm = this.fb.group({
      personTypes: '',
      genderTypes: '',
      documentTypes: '',
      documentNumber: '',
      birthday: new Date(),
      civilStatusTypes: '',
      occupationTypes: '',
      company: '',
      positionTypes: '',
      netSalary: ''
    });
  }

}
