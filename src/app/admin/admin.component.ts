import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

const CLIENT_DATA = [
  {saleDate: '28 Dic', seller: 'Miguel López', client: 'Juan Pérez', business: 'Ranger XL 2.2 Diesel DC Azul Mediterraneo (VIN serie negrita, nº stock Fact)', status: 'En Proceso', amount: '$390,000', balance: '$20,000', deliveryEstimate: '10 Ago', delivery: '12 Ago'},
  {saleDate: '28 Ene', seller: 'Miguel López', client: 'Claudio Gianmateo', business: 'Ecosport', status: 'Entregado', amount: '$380,000', balance: '$0', deliveryEstimate: '20 Ago', delivery: '25 Ago'}

];

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  displayedColumns = ['saleDate', 'seller', 'client', 'business', 'status', 'amount', 'balance', 'deliveryEstimate', 'delivery'];
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
