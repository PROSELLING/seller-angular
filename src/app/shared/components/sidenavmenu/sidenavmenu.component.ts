import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sidenavmenu',
  templateUrl: './sidenavmenu.component.html',
  styleUrls: ['./sidenavmenu.component.scss'],
  encapsulation : ViewEncapsulation.None,
})
export class SidenavMenuComponent implements OnInit {
  menuItems: Array<any>;

  constructor() { }

  ngOnInit() {
    this.menuItems = [
      {
        name: 'Main',
        children: [
          {name: 'Admin', link: 'admin'}
        ]
      }
    ];
  }

}
