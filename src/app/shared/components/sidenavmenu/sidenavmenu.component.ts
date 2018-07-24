import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserModel } from '../../../core/models/user.model';
import { Observable } from 'rxjs/internal/Observable';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../../core/store';
import * as fromAuth from '../../../auth/store';
import * as fromLayout from '../../../core/store';
import { MenuColorModel } from '../../../core/models/menu-color.model';

@Component({
  selector: 'app-sidenavmenu',
  templateUrl: './sidenavmenu.component.html',
  styleUrls: ['./sidenavmenu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidenavMenuComponent implements OnInit {
  menuItems: Array<any>;
  hovered: number;
  hoveredChild: number;
  user$: Observable<UserModel>;
  menuColor$: Observable<MenuColorModel>;

  constructor(public store: Store<fromRoot.RootState>) {
    this.user$ = this.store.pipe(select(fromAuth.getUser));
    this.menuColor$ = this.store.pipe(select(fromLayout.getMenuColor));
  }

  ngOnInit() {
    this.menuItems = [
      {
        name: 'Administración',
        icon: 'finance',
        color: '#00A65A',
        children: [
          {name: 'Convencional', link: 'admin/sales'}
        ]
      },
      {
        name: 'Gestión de Clientes',
        icon: 'account-group',
        color: '#dd4b39',
        children: [
          {name: 'Clientes', link: 'clients'}
        ]
      },
      {
        name: 'Gestión de Vendedores',
        icon: 'account-group',
        color: '#dd4b39',
        children: [
          {name: 'Vendedores', link: 'sellers'}
        ]
      }
    ];
  }

}
