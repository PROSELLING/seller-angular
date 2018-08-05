import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from '../../../../core/services/form.service';
import { ClientContactModel } from '../../../../core/models/client.model';
import { MatTableDataSource } from '@angular/material';
import * as fromClients from '../../../../clients/store';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ObjectModel } from '../../../../core/models/meta.model';

@Component({
  selector: 'app-relationship-tab',
  templateUrl: './relationship-tab.component.html',
  styleUrls: ['./relationship-tab.component.scss']
})
export class RelationshipTabComponent implements OnInit {
  clientRelations$: Observable<ObjectModel[]>;

  relationshipForm: FormGroup;
  relations: ClientContactModel[] = [];
  dataSource = new MatTableDataSource(this.relations);
  tableColumns = ['relationshipType', 'name', 'birthday', 'options'];

  constructor
  (private fb: FormBuilder,
   private formService: FormService,
   private store: Store<fromClients.State>) {

  }

  ngOnInit() {
    this.clientRelations$ = this.store.pipe(select(fromClients.getClientRelations));

    this.relationshipForm = this.fb.group({
      relationshipTypes: '',
      name: '',
      lastName: '',
      birthday: '',
    });
  }

  addRelationship() {
    this.formService.addTableItem(this.relationshipForm, this.relations, this.dataSource);
  }

  private deleteRelationship(index) {
    this.formService.deleteTableItem(this.relations, this.dataSource, index);
  }

}
