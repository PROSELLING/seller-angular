import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ClientModel } from '../core/models/client.model';

const CLIENT_DATA = [
  {id: 1, name: 'Claudia', contact: 'Contacts', status: 'test status', channel: 'Cliente', antiquity: 'hace 3 meses', transaction: 'test'},
  {id: 2, name: 'Hugo', contact: 'More contacts', status: 'another status', channel: 'Cliente', antiquity: 'hace 4 meses', transaction: 'test'}
];

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  displayedColumns = ['name', 'contact', 'status', 'channel', 'transaction', 'antiquity'];
  dataSource = new MatTableDataSource(CLIENT_DATA);

  constructor() {
  }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
