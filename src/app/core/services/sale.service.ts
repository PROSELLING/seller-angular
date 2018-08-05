import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';

const SALES = 'sales';

@Injectable()
export class SaleService {

  constructor(private http: HttpClient) {
  }

  getSales(params: {page: '1', filter: '', sort: 'desc'}): Observable<any> {
    const _params = new HttpParams()
      .set('page', params.page)
      .set('filter', params.filter)
      .set('sort', params.sort);
    return this.http.get<any>(environment.apiUrl + SALES, {params: _params});
  }

  searchSale(query: string) {
    const _params = new HttpParams()
      .set('q', query)
      .set('page', '1');
    return this.http.get(environment.apiUrl + SALES, {params: _params});
  }
}
