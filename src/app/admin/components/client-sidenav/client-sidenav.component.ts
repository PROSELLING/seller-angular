import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ClientModel } from '../../../core/models/client.model';
import { select, Store } from '@ngrx/store';
import * as fromClients from '../../../clients/store';
import { ActivatedRoute } from '@angular/router';
import { ClientsActions } from '../../../clients/store/actions';
import { LayoutActions } from '../../../core/store/actions';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-client-sidenav',
  templateUrl: './client-sidenav.component.html',
  styleUrls: ['./client-sidenav.component.scss']
})
export class ClientSidenavComponent implements OnInit {
  user$: Observable<ClientModel>;

  constructor(private store: Store<fromClients.State>, private route: ActivatedRoute) {
    this.route.params
      .subscribe(
        params => {          
          this.store.dispatch(new ClientsActions.Select(params.id));          
        }        
      );
  }

  ngOnInit() {
    this.user$ = this.store.pipe(select(fromClients.getSelectedClient), 
    tap(result => console.log('Resultado del ngOnInit: ', result)));    
  }

  closeSide() {
    this.store.dispatch(new LayoutActions.CloseRightSidenav());
  }
}
