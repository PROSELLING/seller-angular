import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ClientObjectModel } from '../../../../core/models/client.model';
import * as fromClients from '../../../../clients/store';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-info-tab',
  templateUrl: './info-tab.component.html',
  styleUrls: ['./info-tab.component.scss']
})
export class InfoTabComponent implements OnInit {
  documents$: Observable<ClientObjectModel[]>;
  maritalStatus$: Observable<ClientObjectModel[]>;
  ocupations$: Observable<ClientObjectModel[]>;
  genders$: Observable<ClientObjectModel[]>;
  personTypes$: Observable<ClientObjectModel[]>;
  positionTypes$: Observable<ClientObjectModel[]>;

  infoForm: FormGroup;

  constructor
  (private fb: FormBuilder,
   private store: Store<fromClients.State>) {

  }

  ngOnInit() {
    this.documents$ = this.store.pipe(select(fromClients.getDocuments));
    this.maritalStatus$ = this.store.pipe(select(fromClients.getMaritalStatus));
    this.ocupations$ = this.store.pipe(select(fromClients.getOccupations));
    this.genders$ = this.store.pipe(select(fromClients.getClientGenders));
    this.personTypes$ = this.store.pipe(select(fromClients.getPersonTypes));
    this.positionTypes$ = this.store.pipe(select(fromClients.getCharges));

    this.infoForm = this.fb.group({
      personTypes: '',
      genderTypes: '',
      documentTypes: '',
      documentNumber: '',
      birthday: '',
      civilStatusTypes: '',
      occupationTypes: '',
      company: '',
      positionTypes: '',
      netSalary: ''
    });
  }

}
