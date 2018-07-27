///<reference path="../../../../node_modules/@angular/common/http/src/params.d.ts"/>
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { SellersResponseModel, Empresa } from '../models/seller.model';

const SELLER_SEARCH = 'seller_search';

@Injectable()
export class SellerService {

  constructor(private http: HttpClient) {
  }

  getSellers(params: any): Observable<SellersResponseModel> {

    const _params = new HttpParams()
      .set('page', params.page)
      .set('filter', params.filter)
      .set('sort', 'desc');
    console.log('Sentencia deirecta');
    this.http.get<SellersResponseModel>(environment.apiUrl + SELLER_SEARCH, {params: _params}).subscribe( data =>{
      console.log('datos: ');
      console.log(data);
    });
    return this.http.get<SellersResponseModel>(environment.apiUrl + SELLER_SEARCH, {params: _params});
  }
  /*
    searchSeller(query: string) {
      const _params = new HttpParams()
        .set('q', query)
        .set('page', '1');
      return this.http.get(environment.apiUrl + CLIENT_SEARCH, {params: _params});
    }*/

  getSellers_test() {
    return this.http.get(environment.apiUrl + SELLER_SEARCH);
  }

}
