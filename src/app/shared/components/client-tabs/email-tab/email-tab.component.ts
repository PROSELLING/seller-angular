import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-email-tab',
  templateUrl: './email-tab.component.html',
  styleUrls: ['./email-tab.component.scss']
})
export class EmailTabComponent implements OnInit {
  emailForm: FormGroup;
  emails = [];
  dataSource = new MatTableDataSource(this.emails);
  tableColumns = ['type', 'email', 'main', 'options'];

  emailTypes = [
    {value: '0', viewValue: 'Personal'},
    {value: '1', viewValue: 'Trabajo'}
  ];
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.emailForm = this.fb.group({
      emailTypes: '',
      email: '',
      mainEmail: ''
    });
  }

  private addEmail() {
    if (this.emailForm.valid) {
      this.emails.push(this.emailForm.value);
      this.dataSource.filter = '';
      this.emailForm.reset();
    } else {
      this.validateAllFormFields(this.emailForm);
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

  private deleteEmail(index) {
    this.emails.splice(index, 1);
    this.dataSource.filter = '';
  }

}
