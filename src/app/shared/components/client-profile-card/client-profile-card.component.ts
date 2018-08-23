import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ClientModel } from '../../../core/models/client.model';
import { select, Store } from '@ngrx/store';
import * as fromClients from '../../../clients/store';
import { Observable } from 'rxjs';
import { ObjectModel } from '../../../core/models/meta.model';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

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

  constructor(private store: Store<fromClients.State>) {
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['user']) {
      if (this.user !== undefined && this.user !== null) {
        this.getCategory();
        this.getCharge();
        this.getIndustry();
        this.getPhoneNumber();
        this.getEmail();
        this.getLocation();
        this.getOccupation();
        this.getMaritalStatus();
        this.getAge();
      }
    }
  }

  getCategory() {
    this.category$ = this.store.pipe(
      select(fromClients.getCategory(this.user.id_category)),
      map(categories => {
        const [category] = categories;
        return category;
      })
    );
  }

  getCharge() {
    this.charge$ = this.store.pipe(
      select(fromClients.getCharge(this.user.id_charge)),
      map(charges => {
        const [charge] = charges;
        return charge;
      })
    );
  }

  getIndustry() {
    this.industry$ = this.store.pipe(
      select(fromClients.getClientIndustry(this.user.id_industry)),
      map(industries => {
        console.log('TEST', industries);
        const [industry] = industries;
        return industry;
      })
    );
  }

  getPhoneNumber() {
    const [contactInfo] = this.user.client_contact;
    this.phoneNumber = `+${contactInfo.id_paises} ${contactInfo.area_code} ${contactInfo.phone}`;
  }

  getEmail() {
    const [emailInfo] = this.user.client_mails;
    this.email = emailInfo.mail;
  }

  getLocation() {
    const [location] = this.user.client_address;
    if (location) {
      this.locality$ = this.store.pipe(
        select(fromClients.getTypeLocation(location.id_type)),
        map(locations => {
          const [locationType] = locations;
          return locationType;
        })
      );
      this.address = `${location.street} #${location.number} ${location.district}`;
    }
  }

  getOccupation() {
    this.occupation$ = this.store.pipe(
      select(fromClients.getOccupation(this.user.id_occupation)),
      map(occupations => {
        const [occupation] = occupations;
        return occupation;
      })
    );
  }

  getMaritalStatus() {
    this.maritalStatus$ = this.store.pipe(
      select(fromClients.getMaritalStatusValue(this.user.id_maritals_status)),
      map(maritalStatuses => {
        const [maritalStatus] = maritalStatuses;
        return maritalStatus;
      })
    );
  }

  getAge() {
    this.age = moment().diff(moment(this.user.birthday), 'years');
  }
}
