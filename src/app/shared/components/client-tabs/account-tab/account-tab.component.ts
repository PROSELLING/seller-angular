import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as fromClients from '../../../../clients/store';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ClientModel, ClientObjectModel } from '../../../../core/models/client.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-account-tab',
  templateUrl: './account-tab.component.html',
  styleUrls: ['./account-tab.component.scss']
})
export class AccountTabComponent implements OnInit {
  @Input() client: ClientModel;
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
    const accountInfo = this.setFormValues();
    console.log('client info', accountInfo['contactInfo']['id_type_phone']);

    this.accountForm = this.fb.group({
      phoneTypes: '',
      countryCode: '',
      prefix: '',
      phoneNumber: accountInfo['contactInfo'].phone,
      hasWhatsapp: accountInfo['hasWhatsapp'],
      emailTypes: '',
      email: accountInfo['contactEmail']['mail'],
      mainEmail: '',
      originList: '',
      channels: '',
      resell: ''
    });

    this.phoneTypes$ = this.store.pipe(
      select(fromClients.getPhoneNumberTypes),
      tap(() => {this.accountForm.patchValue({phoneTypes: 4}); console.log('test', this.accountForm)})
    );
    this.origins$ = this.store.pipe(select(fromClients.getOrigins));
    this.channels$ = this.store.pipe(select(fromClients.getChannels));
    this.emailTypes$ = this.store.pipe(select(fromClients.getClientMailTypes));
  }

  setFormValues() {
    const accountInfo = {};
    const [contactInfo] = this.client.client_contact;
    const [contactEmail] = this.client.client_mails;
    accountInfo['contactInfo'] = contactInfo;
    accountInfo['contactEmail'] = contactEmail;
    accountInfo['hasWhatsapp'] = contactInfo.wsp === 'SI';
    return accountInfo;
  }

}
