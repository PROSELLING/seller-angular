import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-account-tab',
  templateUrl: './account-tab.component.html',
  styleUrls: ['./account-tab.component.scss']
})
export class AccountTabComponent implements OnInit {
  accountForm: FormGroup;

  phoneTypes = [
    {value: '0', viewValue: 'Hogar'},
    {value: '1', viewValue: 'Móvil'},
    {value: '2', viewValue: 'Trabajo'}
  ];
  emailTypes = [
    {value: '0', viewValue: 'Personal'},
    {value: '1', viewValue: 'Trabajo'}
  ];
  originList = [
    {value: '0', viewValue: 'Autocosmos'},
    {value: '1', viewValue: 'Autofoco'}
  ];
  channels = [
    {value: '0', viewValue: 'Personal'},
    {value: '1', viewValue: 'Web'},
    {value: '2', viewValue: 'Telefonico'}
  ];
  constructor(private fb: FormBuilder) {
    this.accountForm = fb.group({
      phoneTypes: '',
      countryCode : '',
      prefix : '',
      phoneNumber : '',
      hasWhatsapp: '',
      emailTypes: '',
      email: '',
      mainEmail: '',
      originList: '',
      channels: '',
      resell: ''
    });
  }

  ngOnInit() {

  }

}
