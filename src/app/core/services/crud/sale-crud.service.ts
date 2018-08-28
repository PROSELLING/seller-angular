import { Injectable } from '@angular/core';
import { ObjectModel } from '../../models/meta.model';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as fromSales from '../../../admin/sale/store';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SaleCrudService {

  constructor(private store: Store<fromSales.State>) {
  }

  getStage(id: number): Observable<ObjectModel> {
    return this.store.pipe(
      select(fromSales.getSalesStage(id)),
      map(stages => {
        const [stage] = stages;
        return stage;
      })
    );
  }

  getStatus(id: number): Observable<ObjectModel> {
    return this.store.pipe(
      select(fromSales.getSalesStatusValue(id)),
      map(status => {
        const [statusValue] = status;
        return statusValue;
      })
    );
  }
}
