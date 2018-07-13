import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as fromClients from '../../../../clients/store';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ClientObjectModel } from '../../../../core/models/client.model';

@Component({
  selector: 'app-account-tab',
  templateUrl: './account-tab.component.html',
  styleUrls: ['./account-tab.component.scss']
})
export class AccountTabComponent implements OnInit {
  @Input() isNatural: boolean;
  phoneTypes$: Observable<ClientObjectModel[]>;
  origins$: Observable<ClientObjectModel[]>;
  channels$: Observable<ClientObjectModel[]>;
  emailTypes$: Observable<ClientObjectModel[]>;

  accountForm: FormGroup;

  constructor
  (private fb: FormBuilder,
   private store: Store<fromClients.State>) {

  }

  ngOnInit() {
    this.phoneTypes$ = this.store.pipe(select(fromClients.getPhoneNumberTypes));
    this.origins$ = this.store.pipe(select(fromClients.getOrigins));
    this.channels$ = this.store.pipe(select(fromClients.getChannels));
    this.emailTypes$ = this.store.pipe(select(fromClients.getClientMailTypes));

    this.accountForm = this.fb.group({
      phoneTypes: '',
      countryCode: '',
      prefix: '',
      phoneNumber: '',
      hasWhatsapp: '',
      emailTypes: '',
      email: '',
      mainEmail: '',
      originList: '',
      channels: '',
      resell: ''
    });
  }

}
