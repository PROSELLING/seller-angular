import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { AvailableLeadsService } from '../../core/services/available-leads.service';
import * as fromRoot from '../../core/store';
import { Observable } from 'rxjs/internal/Observable';
import { LeadModel } from '../../core/models/lead.model';
import * as fromLeads from '../../leads/store';
import { tap } from 'rxjs/operators';
import { LeadsActions } from '../store/actions';
import * as LayoutActions from '../../core/store/actions/layout.actions';
@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss']
})
export class LeadsComponent implements OnInit {
  
  displayedColumns = ['id_lead', 'document_number', 'email', 'origin_url', 'name', 'last_name'];
  Leads$: Observable<LeadModel[]>;
  leadsCopy$: LeadModel[];
  resultsLength$: Observable<number>;

  leads: LeadModel[];

  constructor(private availableLeads: AvailableLeadsService,
              private store: Store<fromRoot.RootState>) { }

  ngOnInit() {

    const accionLoad = new LeadsActions.Load({page: 1, filter: ''});
    this.store.dispatch( accionLoad );

    this.Leads$ = this.store.pipe(
      select(fromLeads.getAllLeads),
      tap(leadss => {
        this.setLeadsCopy(leadss);
      })
    );

    this.availableLeads.available_leads({page: 1, filter: ''}).subscribe(data => {      
      this.leads = data['leads']['data'];
    });
  }
  setLeadsCopy( leads: LeadModel[] ){
    this.leadsCopy$ = JSON.parse(JSON.stringify(leads));
    console.log('console_LEADS: ', this.leadsCopy$);
  }

}
