import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AlertService } from '../alert.service';
import { StoreService } from '../store.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  isLoggedIn: boolean;

  constructor(private storeService: StoreService, private route: Router, private alertService: AlertService) {
    this.subscribeState();
  }

  canActivate() {
    if (this.isLoggedIn) {
      return true;
    } else {
      this.alertService.error('Por favor inicia sesión');
      this.route.navigate(['auth', 'login']);
    }
  }

  subscribeState() {
    this.storeService.getObservable().subscribe(() => {
      this.isLoggedIn = this.storeService.getIsAuthenticated();
    });
  }
}
