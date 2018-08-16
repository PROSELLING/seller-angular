import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from '../../../core/models/user.model';

@Component({
  selector: 'app-client-profile-card',
  templateUrl: './client-profile-card.component.html',
  styleUrls: ['./client-profile-card.component.scss']
})
export class ClientProfileCardComponent implements OnInit {
  @Input() user: UserModel;
  ngOnInit() {
  }
}
