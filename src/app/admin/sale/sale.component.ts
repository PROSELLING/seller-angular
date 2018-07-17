import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StepState } from '@covalent/core';
import { ObservableMedia } from '@angular/flex-layout';
import * as fromClients from '../../clients/store';
import { select, Store } from '@ngrx/store';
import { ClientsActions } from '../../clients/store/actions';
import { ClientModel } from '../../core/models/client.model';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {
  stepperMode = 'horizontal';
  stateStep2: StepState = StepState.None;
  stateStep3: StepState = StepState.None;
  stateStep4: StepState = StepState.None;
  disabled = false;
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
      label: 'Ventas',
      link: '/admin/sales'
    },
    {
      label: 'Venta',
      link: ''
    }
  ];

  constructor
  (private activatedRoute: ActivatedRoute,
   private media: ObservableMedia,
   private store: Store<fromClients.State>) {
    this.activatedRoute.params.subscribe(params => {
      this.store.dispatch(new ClientsActions.Select(params.id));
    });
  }

  ngOnInit() {
    this.media.subscribe(() => {
      this.stepperMode = this.getStepperMode();
    });
    this.client$ = this.store.pipe(select(fromClients.getSelectedClient));
  }

  private getStepperMode(): string {
    if (this.media.isActive('xs')) {
      return 'vertical';
    } else {
      return 'horizontal';
    }
  }
}
