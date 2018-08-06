import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { ClientContactModel, ClientEmailModel } from '../models/client.model';
import * as moment from 'moment';
import { Moment } from 'moment';

@Injectable()
export class FormService {

  constructor() {
  }

  addTableItem(formGroup: FormGroup, dataArray: Array<any>, dataSource: MatTableDataSource<any>) {
    if (formGroup.valid) {
      dataArray.push(formGroup.value);
      dataSource.filter = '';
      formGroup.reset();
    } else {
      this.validateAllFormFields(formGroup);
    }

  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({onlySelf: true});
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  deleteTableItem(dataArray: Array<any>, dataSource: MatTableDataSource<any>, index: number) {
    dataArray.splice(index, 1);
    dataSource.filter = '';
  }

  getClientContactInfo(clientContacts: ClientContactModel[]): ClientContactModel {
    const [contactInfo] = clientContacts;
    return contactInfo;
  }

  getClientEmailInfo(contactEmails: ClientEmailModel[]): ClientEmailModel {
    const [emailInfo] = contactEmails;
    return emailInfo;
  }

  getClientHasWhatsapp(clientContact: ClientContactModel): Boolean {
    return clientContact ? clientContact.wsp === 'SI' : false;
  }

  getFormattedDate(date: string): Moment {
    return moment(date);
  }
}
