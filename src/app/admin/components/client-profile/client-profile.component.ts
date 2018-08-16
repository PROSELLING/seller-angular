import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from '../../../core/models/user.model';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss']
})

export class ClientProfileComponent implements OnInit {
  @Input() user: UserModel;
  constructor() {
  }

  ngOnInit() {
  }
}
