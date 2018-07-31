import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { ClientService } from '../../../core/services/client.service';
import { catchError, debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { ClientModel, ClientPayloadModel } from '../../../core/models/client.model';
import { MatOptionSelectionChange } from '@angular/material';
import * as fromClients from '../../../clients/store';
import { Store } from '@ngrx/store';
import { SelectedSearchClient } from '../../../clients/store/actions/clients.actions';

@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.scss']
})

export class ClientSearchComponent implements OnInit {
  selectedClient: any;
  clients$: Observable<ClientModel[]>;
  private searchTerms = new Subject<string>();
  searchControl = new FormControl();

  constructor(private clientService: ClientService, private store: Store<fromClients.State>) {
  }

  ngOnInit() {
    this.clients$ = this.searchControl.valueChanges.pipe(
      filter(term => term),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(
        (term: any) => {
          if (typeof term === 'string') {
            return this.clientService.searchClient(term);
          }
          if (typeof term === 'object') {
            return this.clientService.searchClient(term.name);
          }
          return of<ClientModel[]>([]);
        }
      ),
      map((res: ClientPayloadModel) => {
        console.log('inside pipe', res);
        const [client] = res.clients.data;
        this.store.dispatch(new SelectedSearchClient(client));
        return res.clients.data;
      }),
      catchError((error: any) => {
        console.log('error', error);
        return of<ClientModel[]>([]);
      })
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  displayFn() {
    return (val) => this.display(val);
  }

  private display(client): string {
    if (client) {
      const firstName = client.name ? client.name : '';
      const lastName = client.last_name ? client.last_name : '';
      return client ? `${firstName} ${lastName}` : client;
    }
    return;
  }

  selected(event: MatOptionSelectionChange) {
    this.selectedClient = event.source.value;
  }
}
