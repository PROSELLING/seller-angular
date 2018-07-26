import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';

import {select, Store} from '@ngrx/store';
import {SellerService} from '../../core/services/seller.service';
import * as fromRoot from '../../core/store';
import {Observable} from 'rxjs/internal/Observable';
import {SellerModel} from '../../core/models/seller.model';
import * as fromSellers from '../../sellers/store';
import {debounceTime, distinctUntilChanged, tap} from 'rxjs/operators';
import { SellersActions } from '../store/actions';

import {fromEvent} from 'rxjs/internal/observable/fromEvent';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.scss']
})
export class SellersComponent implements OnInit {

  sellers$: Observable<SellerModel[]>;
  sellersCopy$: SellerModel[];
  displayedColumns = ['name'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('input') input: ElementRef;
  constructor(private store: Store<fromRoot.RootState>, private sellerService: SellerService) { }

  ngOnInit() {

    this.store.dispatch(new SellersActions.Load({page: 1, filter: ''}));

    this.sellerService.getSellers_test().subscribe(data => {
      console.log('TEST SELLERS 2');
      console.log(data);
    });

    this.sellers$ = this.store.pipe(
      select(fromSellers.getAllSellers),
      tap(sellers => {
        this.setSellersCopy(sellers);
      })
    );
  }

  setSellersCopy(sellers: SellerModel[]) {
    this.sellersCopy$ = JSON.parse(JSON.stringify(sellers));
    this.sellersCopy$.map(seller => {
      seller['contactInfo'] = seller.cellphone;
    });
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        tap(() => {
          this.loadSellers();
        })
      ).subscribe();

    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;
          this.loadSellers();
        })
      )
      .subscribe();
  }

  loadSellers() {
    this.store.dispatch(new SellersActions.Load({
      page: (this.paginator.pageIndex + 1),
      filter: this.input.nativeElement.value
    }));
    this.store.pipe(
      select(fromSellers.getAllSellers)
    ).subscribe(data => console.log('test_PRUEBAA', data));
  }

}
