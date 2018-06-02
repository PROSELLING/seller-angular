import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserModel } from '../../../core/models/user.model';
import { StoreService } from '../../../core/services/store.service';

@Component({
  selector: 'app-sidenavmenu',
  templateUrl: './sidenavmenu.component.html',
  styleUrls: ['./sidenavmenu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidenavMenuComponent implements OnInit {
  menuItems: Array<any>;
  user: UserModel;

  constructor(public storeService: StoreService) {
    this.storeService.getObservable().subscribe(() => {
      this.user = this.storeService.getUser();
    });
  }

  ngOnInit() {
    this.menuItems = [
      {
        name: 'Administración',
        icon: 'show_chart',
        children: [
          {name: 'Convencional', link: 'admin'}
        ]
      }
    ];
  }

}
