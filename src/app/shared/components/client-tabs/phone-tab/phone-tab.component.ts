import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientContactModel, ClientModel, ClientObjectModel } from '../../../../core/models/client.model';
import { MatTableDataSource } from '@angular/material';
import { FormService } from '../../../../core/services/form.service';
import { Observable } from 'rxjs';
import * as fromClients from '../../../../clients/store';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';

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
  phoneTypes: ClientObjectModel[];

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
    this.phoneTypes$ = this.store.pipe(
      select(fromClients.getPhoneNumberTypes),
      tap(phoneTypes => {
        this.phoneTypes = phoneTypes;
        this.setPhoneNumbers();
      })
    );
    this.phoneForm = this.fb.group({
      id_type_phone: '',
      id_paises: '',
      area_code: '',
      phone: '',
      wsp: ''
    });
  }

  private setPhoneNumbers(): void {
    if (this.client !== undefined) {
      if (this.client.client_contact.length) {
        for (const contact of this.client.client_contact) {
          const [phoneTypeText] = this.phoneTypes.filter(phoneType => phoneType.id === String(contact.id_type_phone));
          console.log('inside setPhoneNumbers', phoneTypeText, this.phoneTypes);
          const phoneNumber = this.fb.group({
            id_type_phone: phoneTypeText['value'],
            id_paises: contact.id_paises,
            area_code: contact.area_code,
            phone: contact.phone,
            wsp: contact.wsp
          });
          this.addPhoneNumber(phoneNumber);
        }
      }
    }
  }

  addPhoneNumber(phoneForm: FormGroup = this.phoneForm): void {
    console.log('phoneForm', this.phoneForm);
    this.formService.addTableItem(phoneForm, this.phones, this.dataSource);
  }

  deletePhone(index): void {
    this.formService.deleteTableItem(this.phones, this.dataSource, index);
  }

}
