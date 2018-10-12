import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { LeadsResponseModel } from '../models/lead.model';

const GET_LEADS = 'leads';
const AVAILABLES_LEADS = 'availables_leads';
const SELLER_SEARCH = 'seller_search';

@Injectable({
  providedIn: 'root'
})
export class AvailableLeadsService {

  constructor(private http: HttpClient) {}

  available_leads(params: any): Observable<LeadsResponseModel> {
    const _params = new HttpParams()
      .set('page', params.page)
      .set('filter', params.filter)
      .set('sort', 'desc');
    console.log('api_url: ',environment.apiUrl + AVAILABLES_LEADS,{params: _params} );
    return this.http.get<LeadsResponseModel>(environment.apiUrl + AVAILABLES_LEADS,{params: _params});
  }

  asign_leads_seller(params: any){
    const _params = new HttpParams()
      .set('id_seller', params.id_seller)
      .set('ids_leads', params.ids_leads);
      console.log('PARÁMETROS ENVIADOS AL ENDPOINT DE ASIGNACIÓN DE LEADS: ', _params);
  }
}
