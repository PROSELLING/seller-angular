import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';

const PRODUCTS = 'products';
const METADATA = 'productsmetadata';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getSales(params: {page: '1', filter: '', sort: 'desc'}): Observable<any> {
    const _params = new HttpParams()
      .set('page', params.page)
      .set('filter', params.filter)
      .set('sort', params.sort);
    return this.http.get<any>(environment.apiUrl + PRODUCTS, {params: _params});
  }

  getProducts() {
    const _params = new HttpParams()
      .set('page', '1');
    return this.http.get(environment.apiUrl + PRODUCTS, {params: _params});
  }

  getProductsMeta() {
    return this.http.get(environment.apiUrl + METADATA);
  }

  getStage(id: number) {
    const _params = new HttpParams()
      .set('id_stage', String(id));
    return this.http.get(environment.apiUrl + PRODUCTS, {params: _params});
  }
}
