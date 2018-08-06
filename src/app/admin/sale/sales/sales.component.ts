import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { AwsService } from '../../../core/services/aws.service';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../../core/store/index';
import * as fromSale from './store';
import { LayoutActions } from '../../../core/store/actions';
import { Observable } from 'rxjs';
import { SaleActions } from './store/actions';
import { SaleModel } from '../../../core/models/sale.model';
import { tap } from 'rxjs/operators';
import { StockService } from '../../../core/services/stock.service';

const CLIENT_DATA = [
  {
    id: 1,
    saleDate: '28 Dic',
    seller: 'Miguel López',
    client: 'Juan Pérez',
    clientId: 17,
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
    clientId: 94,
    business: 'Ecosport',
    status: 'Entregado',
    amount: '$380,000',
    balance: '$0',
    deliveryEstimate: '20 Ago',
    delivery: '25 Ago'
  }

];

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  sales$: Observable<SaleModel[]>;
  displayedColumns = ['saleDate', 'seller', 'client', 'business', 'status', 'amount', 'balance', 'deliveryEstimate', 'delivery', 'options'];
  dataSource = new MatTableDataSource(CLIENT_DATA);
  image: any;
  selectedRow: any;
  breadcrumbs = [
    {
      label: 'Seller',
      link: '/'
    },
    {
      label: 'Administración',
      link: '/admin'
    },
    {
      label: 'Experiencia',
      link: ''
    }
  ];


  constructor(
    private awsService: AwsService,
    private store: Store<fromRoot.RootState>,
    private physicalStockService: StockService
  ) {
    this.sales$ = this.store.pipe(
      select(fromSale.getAllSales),
      tap(sales => {
        console.log('SALES FROM ENTITY', sales);
      })
    );
  }

  ngOnInit() {
    this.store.dispatch(new SaleActions.Load({page: '1', filter: ''}));
    this.physicalStockService.getPhysicalStock({page: '1', filter: '', sort: 'desc'}).subscribe(res => console.log('PHYSICAL STOCK', res));
    this.physicalStockService.getVirtualStock({page: '1', filter: '', sort: 'desc'}).subscribe(res => console.log('VIRTUAL STOCK', res));
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

  openRightSidenav() {
    this.store.dispatch(new LayoutActions.OpenRightSidenav());
  }
}
