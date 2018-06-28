import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsService } from '../../../../core/services/forms.service';
import { ClientContactModel } from '../../../../core/models/client.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-relationship-tab',
  templateUrl: './relationship-tab.component.html',
  styleUrls: ['./relationship-tab.component.scss']
})
export class RelationshipTabComponent implements OnInit {
  relationshipForm: FormGroup;
  relations: ClientContactModel[] = [];
  dataSource = new MatTableDataSource(this.relations);
  tableColumns = ['relationshipType', 'name', 'birthday', 'options'];

  relationshipTypes = [
    {value: '0', viewValue: 'Amigo'},
    {value: '1', viewValue: 'Conyugue'},
    {value: '2', viewValue: 'Familia'}
  ];

  constructor(private fb: FormBuilder, private formsService: FormsService) {

  }

  ngOnInit() {
    this.relationshipForm = this.fb.group({
      relationshipTypes: '',
      name: '',
      lastName: '',
      birthday: '',
    });
  }

  addRelationship() {
    this.formsService.addTableItem(this.relationshipForm, this.relations, this.dataSource);
  }

  private deleteRelationship(index) {
    this.formsService.deleteTableItem(this.relations, this.dataSource, index);
  }

}
