import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { ClientsResponseModel } from '../models/client.model';

const CLIENTS_ENDPOINT = 'clients';

@Injectable()
export class ClientsService {

  constructor(private http: HttpClient) {
  }

  getClients(params: any): Observable<ClientsResponseModel> {
    const _params = new HttpParams()
      .set('page', params.page)
      .set('filter', params.filter)
      .set('sort', 'desc');
    return this.http.get<ClientsResponseModel>(environment.apiUrl + CLIENTS_ENDPOINT, {params: _params});
  }
}
