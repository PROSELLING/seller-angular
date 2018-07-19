import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as fromClients from '../../../../clients/store';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ClientModel, ClientObjectModel } from '../../../../core/models/client.model';
import { FormService } from '../../../../core/services/form.service';

;

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
   private store: Store<fromClients.State>,
   private formService: FormService) {

  }

  ngOnInit() {
    if (this.client !== undefined) {
      const contactInfo = this.formService.getClientContactInfo(this.client.client_contact);
      const contactEmail = this.formService.getClientEmailInfo(this.client.client_mails);
      const hasWhatsapp = this.formService.getClientHasWhatsapp(contactInfo);

      this.accountForm = this.fb.group({
        phoneTypes: String(contactInfo['id_type_phone']),
        countryCode: String(contactInfo['id_paises']),
        prefix: contactInfo['area_code'],
        phoneNumber: contactInfo['phone'],
        hasWhatsapp: hasWhatsapp,
        emailTypes: String(contactEmail['id_type_mail']),
        email: contactEmail['mail'],
        mainEmail: contactEmail['principal'],
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

