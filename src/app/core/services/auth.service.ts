import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { BEARER_TOKEN, CURRENT_USER, StoreService, TOKEN_EXPIRATION } from './store.service';
import * as moment from 'moment';

@Injectable()
export class AuthService {
  isLoggedIn: boolean;

  constructor(private http: HttpClient, private storeService: StoreService, private router: Router) {
    this.subscribeState();
  }

  login(username: string, password: string) {
    return this.http.post(environment.apiUrl, {username, password});
  }

  setSession(authPayload: any) {
    const expiresAt = moment().add(authPayload.expiresIn, 'second');

    localStorage.setItem(CURRENT_USER, JSON.stringify(authPayload.user));
    localStorage.setItem(BEARER_TOKEN, JSON.stringify(authPayload.token));
    localStorage.setItem(TOKEN_EXPIRATION, JSON.stringify(expiresAt.valueOf()));

    this.storeService.setSession(authPayload);
  }

  logout() {
    localStorage.removeItem(CURRENT_USER);
    localStorage.removeItem(BEARER_TOKEN);
    localStorage.removeItem(TOKEN_EXPIRATION);
    this.storeService.clearState();
    this.router.navigate(['auth', 'login']);
  }

  _isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this._isLoggedIn();
  }

  getExpiration() {
    const expiration = JSON.parse(localStorage.getItem(TOKEN_EXPIRATION));
    return moment(expiration);
  }

  subscribeState() {
    this.storeService.getObservable().subscribe(() => {
      this.isLoggedIn = this.storeService.getIsAuthenticated();
    });
  }
}
