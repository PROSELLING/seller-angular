import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { ClientsResponseModel } from '../models/client.model';

const CLIENTS_ENDPOINT = 'clients';
const CLIENT_SEARCH = 'client_search';
const SELLER_SEARCH = 'seller_search';
const METADATA = 'clientmetadata';

@Injectable()
export class ClientService {

  constructor(private http: HttpClient) {
  }

  getClients(params: any): Observable<ClientsResponseModel> {
    console.log('PARAMS');
    console.log(params);
    const _params = new HttpParams()
      .set('page', params.page)
      .set('filter', params.filter)
      .set('sort', 'desc');
    console.log('datos de clientes');
    this.http.get<ClientsResponseModel>(environment.apiUrl + CLIENT_SEARCH, {params: _params}).subscribe( data => {
      console.log(data);
      console.log('datos de clientes FIN');
    });

    return this.http.get<ClientsResponseModel>(environment.apiUrl + CLIENT_SEARCH, {params: _params});
  }

  searchClient(query: string) {
    const _params = new HttpParams()
      .set('q', query)
      .set('page', '1');
    return this.http.get(environment.apiUrl + CLIENT_SEARCH, {params: _params});
  }

  getSellers() {
    return this.http.get(environment.apiUrl + SELLER_SEARCH).subscribe(data => {
      console.log('TEST SELLERS');
      console.log(data);
    });
  }

  getClientMeta() {
    return this.http.get(environment.apiUrl + METADATA);
  }
}
