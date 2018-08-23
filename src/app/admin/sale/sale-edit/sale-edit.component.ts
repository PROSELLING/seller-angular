import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as fromClients from '../../../clients/store/index';
import { select, Store } from '@ngrx/store';
import { ClientsActions } from '../../../clients/store/actions/index';
import { ClientModel } from '../../../core/models/client.model';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-sale',
  templateUrl: './sale-edit.component.html',
  styleUrls: ['./sale-edit.component.scss']
})
export class SaleEditComponent implements OnInit {


  client$: Observable<ClientModel>;
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
      link: '/admin/sales-list'
    },
    {
      label: 'Venta',
      link: ''
    }
  ];

  constructor
  (private activatedRoute: ActivatedRoute,
   private store: Store<fromClients.State>) {
    this.activatedRoute.params.subscribe(params => {
      this.store.dispatch(new ClientsActions.Select(params.id));
    });
  }

  ngOnInit() {
    this.client$ = this.store.pipe(select(fromClients.getSelectedClient));
  }
}
