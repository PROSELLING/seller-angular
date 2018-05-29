import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class LayoutService {
  public toggleSidenav: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
