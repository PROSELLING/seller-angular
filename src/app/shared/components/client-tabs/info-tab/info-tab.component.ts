import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ClientModel, ClientObjectModel } from '../../../../core/models/client.model';
import * as fromClients from '../../../../clients/store';
import { select, Store } from '@ngrx/store';
import { FormService } from '../../../../core/services/form.service';

@Component({
  selector: 'app-info-tab',
  templateUrl: './info-tab.component.html',
  styleUrls: ['./info-tab.component.scss']
})
export class InfoTabComponent implements OnInit {
  @Input() client: ClientModel;
  documents$: Observable<ClientObjectModel[]>;
  maritalStatus$: Observable<ClientObjectModel[]>;
  occupations$: Observable<ClientObjectModel[]>;
  genders$: Observable<ClientObjectModel[]>;
  personTypes$: Observable<ClientObjectModel[]>;
  positionTypes$: Observable<ClientObjectModel[]>;

  infoForm: FormGroup;

  constructor
  (private fb: FormBuilder,
   private store: Store<fromClients.State>,
   private formService: FormService) {
  }

  ngOnInit() {
    if (this.client !== undefined) {
      const birthday = this.formService.getFormattedDate(this.client.birthday);

      this.infoForm = this.fb.group({
        personTypes: this.client.person_type,
        genderTypes: String(this.client.id_gender),
        documentTypes: String(this.client.id_document),
        documentNumber: this.client.document_nro,
        birthday: birthday,
        civilStatusTypes: String(this.client.id_maritals_status),
        occupationTypes: String(this.client.id_occupation),
        company: this.client.company,
        positionTypes: String(this.client.id_charge),
        netSalary: this.client.grossincome
      });
    } else {
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

    this.documents$ = this.store.pipe(select(fromClients.getDocuments));
    this.maritalStatus$ = this.store.pipe(select(fromClients.getMaritalStatus));
    this.occupations$ = this.store.pipe(select(fromClients.getOccupations));
    this.genders$ = this.store.pipe(select(fromClients.getClientGenders));
    this.personTypes$ = this.store.pipe(select(fromClients.getPersonTypes));
    this.positionTypes$ = this.store.pipe(select(fromClients.getCharges));
  }

}
