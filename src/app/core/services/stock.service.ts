import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';

const PHYSICAL_STOCK = 'physicalstock';
const VIRTUAL_STOCK = 'virtualstock';

@Injectable()
export class StockService {

  constructor(private http: HttpClient) {
  }

  getPhysicalStock(params: {page: '1', filter: '', sort: 'desc'}): Observable<any> {
    const _params = new HttpParams()
      .set('page', params.page)
      .set('filter', params.filter)
      .set('sort', params.sort);
    return this.http.get<any>(environment.apiUrl + PHYSICAL_STOCK, {params: _params});
  }

  getVirtualStock(params: {page: '1', filter: '', sort: 'desc'}): Observable<any> {
    const _params = new HttpParams()
      .set('page', params.page)
      .set('filter', params.filter)
      .set('sort', params.sort);
    return this.http.get<any>(environment.apiUrl + VIRTUAL_STOCK, {params: _params});
  }

  searchPhysicalStock(query: string) {
    const _params = new HttpParams()
      .set('q', query)
      .set('page', '1');
    return this.http.get(environment.apiUrl + PHYSICAL_STOCK, {params: _params});
  }
}
