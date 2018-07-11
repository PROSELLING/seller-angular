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
    switch (event.tab.textLabel) {
      case 'account':
        this.hideAccountLabel = false;
        break;
      case 'domain':
        this.hideCompanyLabel = false;
        break;
      case 'information':
        this.hideInfoLabel = false;
        break;
      case 'phone':
        this.hidePhones = false;
        break;
      case 'email':
        this.hideEmails = false;
        break;
      case 'social':
        this.hideSocial = false;
        break;
      case 'location':
        this.hideLocation = false;
        break;
      case 'relations':
        this.hideRelations = false;
        break;
      case 'comments':
        this.hideComments = false;
        break;
    }
  }

  resetLabelVisibility() {
    this.hideAccountLabel = true;
    this.hideCompanyLabel = true;
    this.hideInfoLabel = true;
    this.hidePhones = true;
    this.hideEmails = true;
    this.hideSocial = true;
    this.hideLocation = true;
    this.hideRelations = true;
    this.hideComments = true;
  }
}
