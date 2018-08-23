import { Component, Input, OnInit } from '@angular/core';
import { ObjectModel } from '../../../core/models/meta.model';

@Component({
  selector: 'app-client-attitude-badge',
  templateUrl: './client-attitude-badge.component.html',
  styleUrls: ['./client-attitude-badge.component.scss']
})
export class ClientAttitudeBadgeComponent implements OnInit {
  @Input() attitude: ObjectModel;

  constructor() { }

  ngOnInit() {
  }

}
