import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { ClientResponseModel, ClientsResponseModel } from '../models/client.model';
import { ObjectModel } from '../models/meta.model';

const CLIENTS_ENDPOINT = 'clients';
const CLIENT_SEARCH = 'client_search';
const METADATA = 'clientmetadata';
const CLIENT = 'client';
const CLIENT_ORIGIN = 'sub_origin';

@Injectable()
export class ClientService {

  constructor(private http: HttpClient) {
  }

  getClients(params: any): Observable<ClientsResponseModel> {
    const _params = new HttpParams()
      .set('page', params.page)
      .set('filter', params.filter)
      .set('sort', 'desc');
    return this.http.get<ClientsResponseModel>(environment.apiUrl + CLIENT_SEARCH, {params: _params});
  }

  searchClient(query: string) {
    const _params = new HttpParams()
      .set('q', query)
      .set('page', '1');
    return this.http.get(environment.apiUrl + CLIENT_SEARCH, {params: _params});
  }

  getClientMeta() {
    return this.http.get(environment.apiUrl + METADATA);
  }

  getClient(id: string): Observable<ClientResponseModel> {
    const _params = new HttpParams()
      .set('id', id);
    return this.http.get<ClientResponseModel>(environment.apiUrl + CLIENT, {params: _params});
  }

  getOrigin(id: string): Observable<ObjectModel> {
    const _params = new HttpParams()
      .set('id', id);
    return this. http.get<ObjectModel>(environment.apiUrl + CLIENT_ORIGIN, {params: _params});
  }
}
