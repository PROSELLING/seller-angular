import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromClients from '../../../clients/store';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
import { Observable, of } from 'rxjs';
import { ObjectModel } from '../../models/meta.model';
import { ClientAddresstModel, ClientContactModel, ClientEmailModel } from '../../models/client.model';
import * as ClientActionTypes from '../../../clients/store/actions/client.actions';
import { ClientService } from '../client.service';

@Injectable()
export class ClientCrudService {

  constructor(private store: Store<fromClients.State>,
              private clientService: ClientService) { }

  static getEmail(emailArray: ClientEmailModel[]): string {
    const [emailInfo] = emailArray;
    if (emailInfo) {
      return emailInfo.mail;
    }
    return '';
  }

  static getPhoneNumber(contactArray: ClientContactModel[]): string {
    const [contactInfo] = contactArray;
    if (contactInfo) {
      return `+${contactInfo.id_paises} ${contactInfo.area_code} ${contactInfo.phone}`;
    }
    return '';
  }

  static getAddress(addressArray: ClientAddresstModel[]): string {
    const [location] = addressArray;
    if (location) {
      return `${location.street} #${location.number} ${location.district}`;
    }
    return '';
  }

  static getAge(date: string): number {
    return moment().diff(moment(date), 'years');
  }

  getCategory(id: number): Observable<ObjectModel> {
    return this.store.pipe(
      select(fromClients.getCategory(id)),
      map(categories => {
        const [category] = categories;
        return category;
      })
    );
  }

  getCharge(id: number): Observable<ObjectModel> {
    return this.store.pipe(
      select(fromClients.getCharge(id)),
      map(charges => {
        const [charge] = charges;
        return charge;
      })
    );
  }

  getIndustry(id: number): Observable<ObjectModel> {
    return this.store.pipe(
      select(fromClients.getClientIndustry(id)),
      map(industries => {
        const [industry] = industries;
        return industry;
      })
    );
  }

  getLocationType(addressArray: ClientAddresstModel[]): Observable<ObjectModel> {
    const [location] = addressArray;
    if (location) {
      return this.store.pipe(
        select(fromClients.getTypeLocation(location.id_type)),
        map(locations => {
          const [locationType] = locations;
          return locationType;
        })
      );
    }
    return of({id: 0, value: ''});
  }

  getOccupation(id: number): Observable<ObjectModel> {
    return this.store.pipe(
      select(fromClients.getOccupation(id)),
      map(occupations => {
        const [occupation] = occupations;
        return occupation;
      })
    );
  }

  getMaritalStatus(id: number): Observable<ObjectModel> {
    return this.store.pipe(
      select(fromClients.getMaritalStatusValue(id)),
      map(maritalStatuses => {
        const [maritalStatus] = maritalStatuses;
        return maritalStatus;
      })
    );
  }

  getOrigin(id: number): Observable<ObjectModel[]> {
    /*this.store.dispatch(new ClientActionTypes.LoadOrigin(id));

    return this.store.pipe(
      select(fromClients.getClientOrigin)
    );*/
    return of([{id: 1, value: 'Prueba'}, {id: 2, value: 'Prueba 2'}]);
    // return this.clientService.getOrigin(id);
  }
}
