import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';

@Injectable()
export class FormsService {

  constructor() { }

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
}
