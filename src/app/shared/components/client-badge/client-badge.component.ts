import { Component, Input, OnInit } from '@angular/core';
import { ObjectModel } from '../../../core/models/meta.model';

@Component({
  selector: 'app-client-badge',
  templateUrl: './client-badge.component.html',
  styleUrls: ['./client-badge.component.scss']
})
export class ClientBadgeComponent implements OnInit {
  @Input() badge: ObjectModel;
  color: string;

  constructor() { }

  ngOnInit() {
    switch (this.badge.id) {
      case 1: {
        this.color = '#c0c0c0';
        break;
      }
      case 2: {
        this.color = '#ffd700';
        break;
      }
      case 3: {
        this.color = '#E5E4E2';
        break;
      }
      case 4: {
        this.color = '#6a696f';
        break;
      }
      default: {
        this.color = '#c0c0c0';
      }
    }
  }

}
