import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClientContactModel } from '../../../../core/models/client.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-phone-tab',
  templateUrl: './phone-tab.component.html',
  styleUrls: ['./phone-tab.component.scss']
})
export class PhoneTabComponent implements OnInit {
  phoneForm: FormGroup;
  phones: ClientContactModel[] = [];
  dataSource = new MatTableDataSource(this.phones);
  tableColumns = ['type', 'prefix', 'number', 'options'];

  phoneTypes = [
    {value: '0', viewValue: 'Hogar'},
    {value: '1', viewValue: 'Móvil'},
    {value: '2', viewValue: 'Trabajo'}
  ]
  coutryCodes = [
    {value: '1', viewValue: '55'},
    {value: '2', viewValue: '56'}
  ];
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.phoneForm = this.fb.group({
      id_type_phone: '',
      id_paises: '',
      area_code: '',
      phone: '',
      wsp: ''
    });
  }

  private addPhoneNumber() {
    if (this.phoneForm.valid) {
      this.phones.push(this.phoneForm.value);
      this.dataSource.filter = '';
      this.phoneForm.reset();
    } else {
      this.validateAllFormFields(this.phoneForm);
    }

  }

  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({onlySelf: true});
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  private deletePhone(index) {
    this.phones.splice(index, 1);
    this.dataSource.filter = '';
  }

}
