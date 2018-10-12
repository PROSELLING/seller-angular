import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { LeadModel } from '../../../core/models/lead.model';
import { LayoutActions } from '../../../core/store/actions';
import { AvailableLeadsService } from "../../../core/services/available-leads.service";

// MATERIAL
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';


import * as fromRoot from '../../../core/store';
import { LeadsActions } from '../../../leads/store/actions';
import * as fromLeads from '../../../leads/store';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-leads-sidenav',
  templateUrl: './leads-sidenav.component.html',
  styleUrls: ['./leads-sidenav.component.scss']
})
export class LeadsSidenavComponent implements OnInit {

  leads_$: LeadModel[];
  displayedColumns = ['select', 'id_lead', 'document_number', 'email', 'origin_url', 'name', 'last_name'];
  Leads$: Observable<LeadModel[]>;
  leadsCopy$: LeadModel[];
  resultsLength$: Observable<number>;
  dataSource = new MatTableDataSource(this.leadsCopy$);
  selection = new SelectionModel<LeadModel>(true, []);
  
  id_seller: number;
  seleted_leads_ids = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private activatedRoute: ActivatedRoute,
              private store: Store<fromRoot.RootState>,
              private availableLeads: AvailableLeadsService) {
    this.activatedRoute.params.subscribe( params =>{
        this.id_seller = params.id;
    });
  }

  ngOnInit() {
    
    const accionLoad = new LeadsActions.Load({page: 1, filter: ''});
    this.store.dispatch( accionLoad );

    this.Leads$ = this.store.pipe(
      select(fromLeads.getAllLeads),
      tap(leads => {
        console.log( 'DENTRO DEL PIPE de LEADS SIDENAV: ' , leads );
        this.setLeadsCopy(leads);
      })
    );

    this.resultsLength$ = this.store.pipe(
      select(fromLeads.getTotal)
    );
    this.dataSource.paginator = this.paginator;

    // this.availableLeads.available_leads({page: 1, filter: ''}).subscribe(data => {      
    //   this.leads_$ = data['leads']['data'];
    //   console.log('DATO DEL SERVICIO DE LEADS: ', this.leads_$);
    // });
  }

  setLeadsCopy( leads: LeadModel[] ){
    this.leadsCopy$ = JSON.parse(JSON.stringify(leads));
    this.dataSource.data = this.leadsCopy$;    
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  toggleSidenav() {
    this.store.dispatch(new LayoutActions.ToggleSidenav());
  }

  selected_lead( row: any ){
    let id_lead = row.lead_id;
    let aux = this.seleted_leads_ids.find(x => x === id_lead);    
    
    if(aux){
      let index = this.seleted_leads_ids.indexOf(aux);
      if (index > -1) {
        this.seleted_leads_ids.splice(index, 1);
      }
    }else{
      this.seleted_leads_ids.push(id_lead);      
    }
  }

  asign_leads(){
    console.log('Leads asignados: ', this.seleted_leads_ids, 'vendedor: ', this.id_seller);
    this.closeSide();
  }

  closeSide() {
    this.store.dispatch(new LayoutActions.CloseRightSidenav());
  }

}
