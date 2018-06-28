import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { FormsService } from '../../../../core/services/forms.service';

@Component({
  selector: 'app-location-tab',
  templateUrl: './location-tab.component.html',
  styleUrls: ['./location-tab.component.scss']
})
export class LocationTabComponent implements OnInit {
  infoForm: FormGroup;
  places = [];
  dataSource = new MatTableDataSource(this.places);
  tableColumns = ['type', 'province', 'street', 'number', 'floor', 'sector', 'options'];

  locationTypes = [
    {value: '0', viewValue: 'Hogar'},
    {value: '1', viewValue: 'Oficina'}
  ];
  provinces = [
    {value: '0', viewValue: 'Alberta'},
    {value: '1', viewValue: 'Atlantico'}
  ];

  constructor(private fb: FormBuilder, private formsService: FormsService) {

  }

  ngOnInit() {
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
    this.formsService.addTableItem(this.infoForm, this.places, this.dataSource);
  }

  private deleteEmail(index) {
    this.formsService.deleteTableItem(this.places, this.dataSource, index);
  }

}
