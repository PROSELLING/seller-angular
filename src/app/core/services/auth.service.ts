import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Authenticate } from '../../auth/store/models/user';
import { Observable } from 'rxjs/internal/Observable';
import { LoginModel } from '../models/login.model';

const LOGIN_ENDPOINT = 'login';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login({email, password}: Authenticate): Observable<LoginModel> {
    return this.http.post<LoginModel>(environment.apiUrl + LOGIN_ENDPOINT, {email, password});
  }
}
