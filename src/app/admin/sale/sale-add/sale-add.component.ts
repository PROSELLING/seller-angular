import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as fromClients from '../../../clients/store/index';
import { select, Store } from '@ngrx/store';
import { ClientModel } from '../../../core/models/client.model';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-sale',
  templateUrl: './sale-add.component.html',
  styleUrls: ['./sale-add.component.scss']
})
export class SaleAddComponent implements OnInit {
  client$: Observable<ClientModel>;
  client: ClientModel;

  breadcrumbs = [
    {
      label: 'Seller',
      link: '/'
    },
    {
      label: 'Administración',
      link: '/admin'
    },
    {
      label: 'Experiencia',
      link: '/admin/sales'
    },
    {
      label: 'Nueva Venta',
      link: ''
    }
  ];

  constructor
  (private activatedRoute: ActivatedRoute,
   private store: Store<fromClients.State>) {

  }

  ngOnInit() {
    this.client$ = this.store.pipe(
      select(fromClients.getSearchSelectedClient)
    );
  }
}
