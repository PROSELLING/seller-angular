import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as fromClients from '../../../../clients/store';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ClientModel } from '../../../../core/models/client.model';
import { FormService } from '../../../../core/services/form.service';
import { ObjectModel } from '../../../../core/models/meta.model';

;

@Component({
  selector: 'app-account-tab',
  templateUrl: './account-tab.component.html',
  styleUrls: ['./account-tab.component.scss']
})
export class AccountTabComponent implements OnInit, OnChanges {
  @Input() client: ClientModel;
  @Input() isNatural: boolean;
  phoneTypes$: Observable<ObjectModel[]>;
  origins$: Observable<ObjectModel[]>;
  channels$: Observable<ObjectModel[]>;
  emailTypes$: Observable<ObjectModel[]>;

  accountForm: FormGroup;

  constructor
  (private fb: FormBuilder,
   private store: Store<fromClients.State>,
   private formService: FormService) {

  }

  ngOnChanges() {
    if (this.client) {
      console.log('CHANGED', this.client);
    }
  }

  ngOnInit() {
    if (this.client !== undefined && this.client !== null) {
      console.log('wHATS HAPPENING OVER HERE', this.client);
      const contactInfo = this.formService.getClientContactInfo(this.client.client_contact);
      const contactEmail = this.formService.getClientEmailInfo(this.client.client_mails);

      const hasWhatsapp = this.formService.getClientHasWhatsapp(contactInfo);

      this.accountForm = this.fb.group({
        phoneTypes: contactInfo ? String(contactInfo.id_type_phone) : '',
        countryCode: contactInfo ? String(contactInfo.id_paises) : '',
        prefix: contactInfo ? contactInfo.area_code : '',
        phoneNumber: contactInfo ? contactInfo.phone : '',
        hasWhatsapp: hasWhatsapp,
        emailTypes: contactEmail ? String(contactEmail.id_type_mail) : '',
        email: contactEmail ? contactEmail.mail : '',
        mainEmail: contactEmail ? contactEmail.principal : '',
        originList: String(this.client.id_origin),
        channels: String(this.client.id_channel),
        resell: Boolean(this.client.resale === 'si')
      });
    } else {
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

    this.phoneTypes$ = this.store.pipe(select(fromClients.getPhoneNumberTypes));
    this.origins$ = this.store.pipe(select(fromClients.getOrigins));
    this.channels$ = this.store.pipe(select(fromClients.getChannels));
    this.emailTypes$ = this.store.pipe(select(fromClients.getClientMailTypes));
  }
}

