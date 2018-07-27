import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { ClientContactModel, ClientModel } from '../../core/models/client.model';
import { select, Store } from '@ngrx/store';

import { ClientsActions } from '../store/actions';
import * as fromClients from '../store';
import * as fromRoot from '../../core/store';
import { Observable } from 'rxjs/internal/Observable';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';

import { ClientService } from '../../core/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements AfterViewInit, OnInit {
  clients$: Observable<ClientModel[]>;
  clientsCopy$: ClientModel[];
  displayedColumns = ['name', 'client_contact', 'origin'];
  resultsLength$: Observable<number>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('input') input: ElementRef;

  constructor(private store: Store<fromRoot.RootState>, private clientService: ClientService) {

  }

  ngOnInit() {
    this.store.dispatch(new ClientsActions.Load({page: 1, filter: ''}));

    this.resultsLength$ = this.store.pipe(
      select(fromClients.getTotal)
    );

    this.clients$ = this.store.pipe(
      select(fromClients.getAllClients),
      tap(clients => {
        this.setClientsCopy(clients);
      })
    );
  }
  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        tap(() => {
          this.loadClients();
        })
      ).subscribe();

    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;
          this.loadClients();
        })
      )
      .subscribe();
  }

  loadClients() {
    this.store.dispatch(new ClientsActions.Load({
      page: (this.paginator.pageIndex + 1),
      filter: this.input.nativeElement.value
    }));
    this.store.pipe(
      select(fromClients.getAllClients)
    ).subscribe(data => console.log('test_PRUEBAA', data));
  }

  setClientsCopy(clients: ClientModel[]) {
    this.clientsCopy$ = JSON.parse(JSON.stringify(clients));
    console.log(this.clientsCopy$);
    this.clientsCopy$.map(client => {
      client['contactInfo'] = this.setContactInfo(client.client_contact);
    });
  }

  setContactInfo(clientContact: ClientContactModel[]) {
    let contactInfo = '';
    if (clientContact.length) {
      clientContact.map(contact => {
        contactInfo += contactInfo + contact.phone + ' ';
      });
      return contactInfo.slice(0, -1);
    } else {
      return 'No hay información';
    }
  }
}
