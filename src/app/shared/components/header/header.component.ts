import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';

import { AuthActions } from '../../../auth/store/actions';
import * as LayoutActions from '../../../core/store/actions/layout.actions';
import * as fromRoot from '../../../core/store';
import * as fromAuth from '../../../auth/store';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedIn$: Observable<boolean>;

  constructor
  (private store: Store<fromRoot.RootState>) {
    this.loggedIn$ = this.store.pipe(select(fromAuth.getLoggedIn));
  }

  ngOnInit() {
  }

  toggleSidenav() {
    this.store.dispatch(new LayoutActions.ToggleSidenav());
  }

  logout() {
    this.store.dispatch(new AuthActions.Logout());
  }
}
