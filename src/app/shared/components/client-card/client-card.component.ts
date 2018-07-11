import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserModel } from '../../../core/models/user.model';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss']
})
export class ClientCardComponent implements OnInit {
  @Input() user: UserModel;
  @Input() isNatural: boolean;
  @Output() isNaturalChange = new EventEmitter();
  ngOnInit() {
  }

  toggled(event: any) {
    this.isNaturalChange.emit(event.checked);
  }
}
