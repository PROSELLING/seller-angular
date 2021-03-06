import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { AwsService } from '../../../core/services/aws.service';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../../core/store';
import * as fromSale from '../store';
import { LayoutActions } from '../../../core/store/actions';
import { Observable } from 'rxjs';
import { SaleActions } from '../store/actions';
import { SaleModel } from '../../../core/models/sale.model';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { StockService } from '../../../core/services/stock.service';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { SaleService } from '../../../core/services/sale.service';
import { ProductService } from '../../../core/services/product.service';
import { ProductsActions } from '../../../product/store/actions';
import { ObjectModel } from '../../../core/models/meta.model';
import { ClientCrudService } from '../../../core/services/crud/client-crud.service';
import { SaleCrudService } from '../../../core/services/crud/sale-crud.service';
import { ClientService } from '../../../core/services/client.service';

const CLIENT_DATA = [
  {
    id: 1,
    saleDate: '28 Dic',
    seller: 'Miguel López',
    client: 'Juan Pérez',
    clientId: 165764,
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
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.scss']
})
export class SalesListComponent implements OnInit, AfterViewInit {
  sales$: Observable<SaleModel[]>;
  // displayedColumns = ['seller', 'category', 'client', 'sale', 'status', 'amountBalance', 'deliveryEstimate', 'options'];
  displayedColumns = ['createdAt', 'stage', 'category', 'client', 'empathy', 'product', 'status', 'total', 'origin'];
  dataSource = new MatTableDataSource(CLIENT_DATA);
  selectedRow: any;

  resultsLength$: Observable<number>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('input') input: ElementRef;

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

  // image: any;


  constructor(
    private awsService: AwsService,
    private store: Store<fromRoot.RootState>,
    private physicalStockService: StockService,
    private saleService: SaleService,
    private productService: ProductService,
    private clientCrudService: ClientCrudService,
    private saleCrudService: SaleCrudService,
    private clientService: ClientService
  ) {
    this.sales$ = this.store.pipe(
      select(fromSale.getAllSales),
    );
    this.resultsLength$ = this.store.pipe(
      select(fromSale.getTotal)
    );
  }

  ngOnInit() {
    this.store.dispatch(new SaleActions.Load({page: '1', filter: ''}));
    this.store.dispatch(new ProductsActions.Load({}));
    /* this.clientService.getOrigin(5).subscribe(res => console.log('ORIGIN', res));
    this.productService.getProducts().subscribe(res => console.log('PRODUCTS', res));
    this.productService.getProductsMeta().subscribe(res => console.log('PRODUCTS META', res));
    this.physicalStockService.getPhysicalStock({page: '1', filter: '', sort: 'desc'}).subscribe(res => console.log('PHYSICAL STOCK', res));
    this.physicalStockService.getVirtualStock({page: '1', filter: '', sort: 'desc'}).subscribe(res => console.log('VIRTUAL STOCK', res));
    this.saleService.getSaleMeta().subscribe(res => console.log('SALE METADATA', res));*/
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        tap(() => {
          this.loadSales();
        })
      ).subscribe();

    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;
          this.loadSales();
        })
      )
      .subscribe();
  }

  loadSales() {
    this.store.dispatch(new SaleActions.Load({
      page: (this.paginator.pageIndex + 1),
      filter: this.input.nativeElement.value
    }));
    this.store.pipe(
      select(fromSale.getAllSales)
    );
  }

  getClientCategory(id: number): Observable<ObjectModel> {
    return this.clientCrudService.getCategory(id);
  }

  getClientOrigin(id: number): Observable<ObjectModel[]> {
    return this.clientCrudService.getOrigin(id);
  }

  getSaleStatus(id: number): Observable<ObjectModel> {
    return this.saleCrudService.getStatus(id);
  }


  /*selectEvent(file: File) {
    this.awsService.singleFileUpload(file, 'imagenes')
      .subscribe(fileData => this.image = fileData);
  }

  deleteImage() {
    this.awsService.deleteFile(this.image);
    this.image = {};
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
  }*/

  onRowHovered(row) {
    this.selectedRow = row;
  }

  openRightSidenav() {
    this.store.dispatch(new LayoutActions.OpenRightSidenav());
  }
}
