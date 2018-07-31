import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../core/store';
import { Observable } from 'rxjs/internal/Observable';
import { SellerModel } from '../../core/models/seller.model';
import * as fromSellers from '../../sellers/store';
import { tap } from 'rxjs/operators';
import { SellersActions } from '../store/actions';
import * as LayoutActions from '../../core/store/actions/layout.actions';

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

  constructor(private store: Store<fromRoot.RootState>) {
  }

  ngOnInit() {
    this.store.dispatch(new SellersActions.Load({page: 1, filter: ''}));

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

  openRightSidenav() {
    this.store.dispatch(new LayoutActions.OpenRightSidenav());
  }
}
