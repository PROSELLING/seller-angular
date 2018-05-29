import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { LayoutService } from '../../../core/services/layout.service';
import { ObservableMedia } from '@angular/flex-layout';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  mode = 'side';
  opened = true;

  constructor
  (public layoutService: LayoutService,
   private media: ObservableMedia,
   public authService: AuthService) {
    this.authService.subscribeState();
    this.layoutService.toggleSidenav.subscribe(
      () => {
        this.sidenav.toggle();
      });
    this.media.subscribe(() => {
      this.mode = this.getMode();
      this.opened = this.getOpened();
    });
  }

  ngOnInit() {
  }

  private getMode(): string {
    if (this.media.isActive('gt-sm')) {
      return 'side';
    } else {
      return 'over';
    }
  }

  private getOpened(): boolean {
    if (this.media.isActive('gt-sm')) {
      return true;
    }
  }

}
