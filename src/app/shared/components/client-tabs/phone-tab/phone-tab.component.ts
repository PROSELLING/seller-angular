import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClientContactModel } from '../../../../core/models/client.model';
import { MatTableDataSource } from '@angular/material';
import { FormsService } from '../../../../core/services/forms.service';

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
  constructor(private fb: FormBuilder, private formsService: FormsService) {
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
    this.formsService.addTableItem(this.phoneForm, this.phones, this.dataSource);
  }

  private deletePhone(index) {
    this.formsService.deleteTableItem(this.phones, this.dataSource, index);
  }

}
