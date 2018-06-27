import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs/internal/Observable';
import { select, Store } from '@ngrx/store';
import { LayoutActions } from '../../../core/store/actions';
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
  showRightSidenav$: Observable<boolean>;
  loggedIn$: Observable<boolean>;

  constructor
  (private media: ObservableMedia,
   private store: Store<fromRoot.RootState>) {

  }

  ngOnInit() {
    this.loggedIn$ = this.store.pipe(select(fromAuth.getLoggedIn));
    this.showSidenav$ = this.store.pipe(select(fromRoot.getShowSidenav));
    this.showRightSidenav$ = this.store.pipe(select(fromRoot.getShowRightSidenav));
    this.media.subscribe(() => {
      this.mode = this.getMode();
      this.getOpened();
    });
  }

  closeSidenav(event: any) {
    console.log('closeSidenav', event);
    this.store.dispatch(new LayoutActions.CloseSidenav());
    this.store.dispatch(new LayoutActions.CloseRightSidenav());
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
