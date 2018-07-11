import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientModel } from '../../../core/models/client.model';

@Component({
  selector: 'app-client-tabs',
  templateUrl: './client-tabs.component.html',
  styleUrls: ['./client-tabs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClientTabsComponent implements OnInit {
  user$: Observable<ClientModel>;
  hideAccountLabel = false;
  hideCompanyLabel = true;
  hideInfoLabel = true;
  hidePhones = true;
  hideEmails = true;
  hideSocial = true;
  hideLocation = true;
  hideRelations = true;
  hideComments = true;
  isNatural = true;

  constructor() {
  }

  ngOnInit() {
  }

  tabChanged(event) {
    this.resetLabelVisibility();
    switch (event.index) {
      case 0:
        this.hideAccountLabel = false;
        break;
      case 1:
        this.hideCompanyLabel = false;
        break;
      case 2:
        this.hideInfoLabel = false;
        break;
      case 3:
        this.hidePhones = false;
        break;
      case 4:
        this.hideEmails = false;
        break;
      case 5:
        this.hideSocial = false;
        break;
      case 6:
        this.hideLocation = false;
        break;
      case 7:
        this.hideRelations = false;
        break;
      case 8:
        this.hideComments = false;
        break;
    }
  }

  resetLabelVisibility() {
    this.hideAccountLabel = true;
    this.hideInfoLabel = true;
    this.hidePhones = true;
    this.hideEmails = true;
    this.hideSocial = true;
    this.hideLocation = true;
    this.hideRelations = true;
    this.hideComments = true;
  }
}
