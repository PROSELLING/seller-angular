import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { FormService } from '../../../../core/services/form.service';
import * as fromClients from '../../../../clients/store';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ObjectModel } from '../../../../core/models/meta.model';

@Component({
  selector: 'app-location-tab',
  templateUrl: './location-tab.component.html',
  styleUrls: ['./location-tab.component.scss']
})
export class LocationTabComponent implements OnInit {
  locationTypes$: Observable<ObjectModel[]>;

  infoForm: FormGroup;
  places = [];
  dataSource = new MatTableDataSource(this.places);
  tableColumns = ['type', 'province', 'street', 'number', 'floor', 'sector', 'options'];

  provinces = [
    {value: '0', viewValue: 'Alberta'},
    {value: '1', viewValue: 'Atlantico'}
  ];

  constructor
  (private fb: FormBuilder,
   private formService: FormService,
   private store: Store<fromClients.State>) {

  }

  ngOnInit() {
    this.locationTypes$ = this.store.pipe(select(fromClients.getTypeLocations));

    this.infoForm = this.fb.group({
      locationTypes: '',
      provinces: '',
      street: '',
      number: '',
      floor: '',
      sector: '',
      long: '',
      lat: '',
      googlePlaceId: ''
    });
  }



  addPlace() {
    this.formService.addTableItem(this.infoForm, this.places, this.dataSource);
  }

  private deleteEmail(index) {
    this.formService.deleteTableItem(this.places, this.dataSource, index);
  }

}
