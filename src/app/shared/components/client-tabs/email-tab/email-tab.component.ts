import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { FormsService } from '../../../../core/services/forms.service';

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
  constructor(private fb: FormBuilder, private formsService: FormsService) {
  }

  ngOnInit() {
    this.emailForm = this.fb.group({
      emailTypes: '',
      email: '',
      mainEmail: ''
    });
  }

  private addEmail() {
    this.formsService.addTableItem(this.emailForm, this.emails, this.dataSource);
  }

  private deleteEmail(index) {
    this.formsService.deleteTableItem(this.emails, this.dataSource, index);
  }

}
