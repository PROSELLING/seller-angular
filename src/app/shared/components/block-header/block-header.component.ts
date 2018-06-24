import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-header',
  templateUrl: './block-header.component.html',
  styleUrls: ['./block-header.component.scss']
})
export class BlockHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() breadcrumbs: any;
  home: any;
  currentRoute: any;

  constructor() { }

  ngOnInit() {
    this.home = this.breadcrumbs.shift();
    this.currentRoute = this.breadcrumbs.pop();
  }

}
