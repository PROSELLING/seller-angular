import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs/internal/Observable';
import { select, Store } from '@ngrx/store';
import * as LayoutActions from '../../../core/store/actions/layout.actions';
import * as fromRoot from '../../../core/store';
import * as fromAuth from '../../../auth/store';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  mode = 'side';
  showSidenav$: Observable<boolean>;
  loggedIn$: Observable<boolean>;

  constructor
  (private media: ObservableMedia,
   private store: Store<fromRoot.RootState>) {
    this.loggedIn$ = this.store.pipe(select(fromAuth.getLoggedIn));
    this.showSidenav$ = this.store.pipe(select(fromRoot.getShowSidenav));
    this.media.subscribe(() => {
      this.mode = this.getMode();
      this.getOpened();
    });
  }

  ngOnInit() {
  }

  closeSidenav() {
    this.store.dispatch(new LayoutActions.CloseSidenav());
  }

  private getMode(): string {
    if (this.media.isActive('gt-sm')) {
      return 'side';
    } else {
      return 'over';
    }
  }

  private getOpened(): void {
    if (this.media.isActive('gt-sm')) {
      this.store.dispatch(new LayoutActions.OpenSidenav());
    }
  }

}
