import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../core/services/layout.service';
import { AuthService } from '../../../core/services/auth.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../core/store';
import * as LayoutActions from '../../../core/store/actions/layout.actions';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor
  (public layoutService: LayoutService,
   public authService: AuthService,
   private store: Store<fromRoot.State>) {
    this.authService.subscribeState();
  }

  ngOnInit() {
  }

  toggleSidenav() {
    this.store.dispatch(new LayoutActions.ToggleSidenav());
  }

  logout() {
    this.authService.logout();
  }

}
