import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ClientModel } from '../../../core/models/client.model';
import { Store } from '@ngrx/store';
import * as fromClients from '../../../clients/store';
import { Observable } from 'rxjs';
import { ObjectModel } from '../../../core/models/meta.model';
import { ClientCrudService } from '../../../core/services/crud/client-crud.service';

@Component({
  selector: 'app-client-profile-card',
  templateUrl: './client-profile-card.component.html',
  styleUrls: ['./client-profile-card.component.scss']
})
export class ClientProfileCardComponent implements OnInit, OnChanges {
  @Input() user: ClientModel;
  category$: Observable<ObjectModel>;
  charge$: Observable<ObjectModel>;
  industry$: Observable<ObjectModel>;
  occupation$: Observable<ObjectModel>;
  locality$: Observable<ObjectModel>;
  maritalStatus$: Observable<ObjectModel>;
  phoneNumber: string;
  email: string;
  address: string;
  age: number;

  constructor(private store: Store<fromClients.State>,
              private clientCrudService: ClientCrudService) {
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['user']) {
      if (this.user !== undefined && this.user !== null) {
        this.category$ = this.clientCrudService.getCategory(this.user.id_category);
        this.charge$ = this.clientCrudService.getCharge(this.user.id_charge);
        this.industry$ = this.clientCrudService.getIndustry(this.user.id_industry);
        this.phoneNumber = ClientCrudService.getPhoneNumber(this.user.client_contact);
        this.email = ClientCrudService.getEmail(this.user.client_mails);
        this.address = ClientCrudService.getAddress(this.user.client_address);
        this.locality$ = this.clientCrudService.getLocationType(this.user.client_address);
        this.occupation$ = this.clientCrudService.getOccupation(this.user.id_occupation);
        this.maritalStatus$ = this.clientCrudService.getMaritalStatus(this.user.id_maritals_status);
        this.age = ClientCrudService.getAge(this.user.birthday);
      }
    }
  }
}
