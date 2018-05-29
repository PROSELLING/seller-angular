import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../core/services/layout.service';
import { AuthService } from '../../../core/services/auth.service';
import { StoreService } from '../../../core/services/store.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor
  (public layoutService: LayoutService,
   public authService: AuthService) {
    this.authService.subscribeState();
  }

  ngOnInit() {
  }

  toggleSidenav() {
    this.layoutService.toggleSidenav.emit();
  }

  logout() {
    this.authService.logout();
  }

}
