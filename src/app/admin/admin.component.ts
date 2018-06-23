import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { AwsService } from '../core/services/aws.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../core/store';
import * as LayoutActions from '../core/store/actions/layout.actions';

const CLIENT_DATA = [
  {
    id: 1,
    saleDate: '28 Dic',
    seller: 'Miguel López',
    client: 'Juan Pérez',
    business: 'Ranger XL 2.2 Diesel DC Azul Mediterraneo (VIN serie negrita, nº stock Fact)',
    status: 'En Proceso',
    amount: '$390,000',
    balance: '$20,000',
    deliveryEstimate: '10 Ago',
    delivery: '12 Ago'
  },
  {
    id: 2,
    saleDate: '28 Ene',
    seller: 'Miguel López',
    client: 'Claudio Gianmateo',
    business: 'Ecosport',
    status: 'Entregado',
    amount: '$380,000',
    balance: '$0',
    deliveryEstimate: '20 Ago',
    delivery: '25 Ago'
  }

];

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  displayedColumns = ['saleDate', 'seller', 'client', 'business', 'status', 'amount', 'balance', 'deliveryEstimate', 'delivery', 'options'];
  dataSource = new MatTableDataSource(CLIENT_DATA);
  image: any;
  selectedRow: any;


  constructor(
    private awsService: AwsService,
    private store: Store<fromRoot.RootState>
  ) {
  }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  selectEvent(file: File) {
    this.awsService.singleFileUpload(file, 'imagenes')
      .subscribe(fileData => this.image = fileData);
  }

  deleteImage() {
    this.awsService.deleteFile(this.image);
    this.image = {};
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
  }

  onRowHovered(row) {
    this.selectedRow = row;
  }

  openGantt() {
    this.store.dispatch(new LayoutActions.ToggleRightSidenav());
  }
}
