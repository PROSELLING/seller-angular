import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { FormService } from '../../../../core/services/form.service';
import { Observable } from 'rxjs';
import { ClientObjectModel } from '../../../../core/models/client.model';
import * as fromClients from '../../../../clients/store';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-email-tab',
  templateUrl: './email-tab.component.html',
  styleUrls: ['./email-tab.component.scss']
})
export class EmailTabComponent implements OnInit {
  emailTypes$: Observable<ClientObjectModel[]>;

  emailForm: FormGroup;
  emails = [];
  dataSource = new MatTableDataSource(this.emails);
  tableColumns = ['type', 'email', 'main', 'options'];

  constructor
  (private fb: FormBuilder,
   private formService: FormService,
   private store: Store<fromClients.State>) {
  }

  ngOnInit() {
    this.emailTypes$ = this.store.pipe(select(fromClients.getClientMailTypes));

    this.emailForm = this.fb.group({
      emailTypes: '',
      email: '',
      mainEmail: ''
    });
  }

  addEmail() {
    this.formService.addTableItem(this.emailForm, this.emails, this.dataSource);
  }

  deleteEmail(index) {
    this.formService.deleteTableItem(this.emails, this.dataSource, index);
  }

}
