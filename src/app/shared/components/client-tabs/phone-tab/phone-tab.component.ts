import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClientContactModel, ClientModel, ClientObjectModel } from '../../../../core/models/client.model';
import { MatTableDataSource } from '@angular/material';
import { FormService } from '../../../../core/services/form.service';
import { Observable } from 'rxjs';
import * as fromClients from '../../../../clients/store';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-phone-tab',
  templateUrl: './phone-tab.component.html',
  styleUrls: ['./phone-tab.component.scss']
})
export class PhoneTabComponent implements OnInit {
  @Input() client: ClientModel;
  phoneForm: FormGroup;
  phones: ClientContactModel[] = [];
  dataSource = new MatTableDataSource(this.phones);
  tableColumns = ['type', 'prefix', 'number', 'options'];

  phoneTypes$: Observable<ClientObjectModel[]>;

  coutryCodes = [
    {value: '1', viewValue: '55'},
    {value: '2', viewValue: '56'}
  ];
  constructor
  (private fb: FormBuilder,
   private formService: FormService,
   private store: Store<fromClients.State>) {
  }

  ngOnInit() {
    this.phoneTypes$ = this.store.pipe(select(fromClients.getPhoneNumberTypes));

    this.phoneForm = this.fb.group({
      id_type_phone: '',
      id_paises: '',
      area_code: '',
      phone: '',
      wsp: ''
    });
  }

  addPhoneNumber() {
    this.formService.addTableItem(this.phoneForm, this.phones, this.dataSource);
  }

  private deletePhone(index) {
    this.formService.deleteTableItem(this.phones, this.dataSource, index);
  }

}
