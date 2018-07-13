import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { ClientService } from '../../../core/services/client.service';
import { catchError, debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { ClientPayloadModel } from '../../../core/models/client.model';
import { MatOptionSelectionChange } from '@angular/material';

@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.scss']
})

export class ClientSearchComponent implements OnInit {
  selectedClient: any;
  clients: Observable<any[]>;
  private searchTerms = new Subject<string>();
  searchControl = new FormControl();

  constructor(private clientService: ClientService) {
  }

  ngOnInit() {
    this.clients = this.searchControl.valueChanges.pipe(
      filter(term => term),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(
        term => term ? this.clientService.searchClient(term) : of<any[]>([])
      ),
      map((res: ClientPayloadModel) => {
        console.log('inside pipe', res.clients.data);
        return res.clients.data;
      }),
      catchError((error: any) => {
        console.log('error', error);
        return of<any[]>([]);
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
