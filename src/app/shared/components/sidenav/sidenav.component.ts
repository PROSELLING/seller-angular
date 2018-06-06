import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { LayoutService } from '../../../core/services/layout.service';
import { ObservableMedia } from '@angular/flex-layout';
import { AuthService } from '../../../core/services/auth.service';
import { Observable } from 'rxjs/internal/Observable';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../../core/store';
import * as LayoutActions from '../../../core/store/actions/layout.actions';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  mode = 'side';
  opened = true;
  showSidenav$: Observable<boolean>;

  constructor
  (public layoutService: LayoutService,
   private media: ObservableMedia,
   public authService: AuthService,
   private store: Store<fromRoot.RootState>) {

    this.showSidenav$ = this.store.pipe(select(fromRoot.getShowSidenav));
    this.authService.subscribeState();
    this.layoutService.toggleSidenav.subscribe(
      () => {
        this.sidenav.toggle();
      });
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
