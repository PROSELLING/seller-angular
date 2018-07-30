import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';

import {select, Store} from '@ngrx/store';
import {SellerService} from '../../core/services/seller.service';
import * as fromRoot from '../../core/store';
import {Observable} from 'rxjs/internal/Observable';
import {SellerModel} from '../../core/models/seller.model';
import * as fromSellers from '../../sellers/store';
import {debounceTime, distinctUntilChanged, tap} from 'rxjs/operators';
import { SellersActions } from '../store/actions';

import {fromEvent} from 'rxjs/internal/observable/fromEvent';
import * as fromClients from '../../clients/store';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.scss']
})
export class SellersComponent implements OnInit {

  sellers$: Observable<SellerModel[]>;
  sellersCopy$: SellerModel[];
  resultsLength$: Observable<number>;
  displayedColumns = ['name', 'last_name', 'phone', 'celphone', 'email', 'menu'];

  @ViewChild('input') input: ElementRef;
  constructor(private store: Store<fromRoot.RootState>, private sellerService: SellerService) { }

  ngOnInit() {
    this.store.dispatch(new SellersActions.Load({page: 1, filter: ''}));

    this.sellerService.getSellers_test().subscribe(data => {
      console.log('TEST SELLERS 2', data);
    });

    this.sellers$ = this.store.pipe(
      select(fromSellers.getAllSellers),
      tap(sellers => {
        this.setSellersCopy(sellers);
      })
    );
    this.resultsLength$ = this.store.pipe(
      select(fromSellers.getTotal)
    );
  }

  setSellersCopy(sellers: SellerModel[]) {
    this.sellersCopy$ = JSON.parse(JSON.stringify(sellers));
    console.log('console_SELLERS: ', this.sellersCopy$);
  }
}
