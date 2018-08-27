import { Component, Input, OnInit } from '@angular/core';
import { SaleCrudService } from '../../../core/services/crud/sale-crud.service';
import { Observable } from 'rxjs';
import { ObjectModel } from '../../../core/models/meta.model';

@Component({
  selector: 'app-sale-stage-icon',
  templateUrl: './sale-stage-icon.component.html',
  styleUrls: ['./sale-stage-icon.component.scss']
})
export class SaleStageIconComponent implements OnInit {
  @Input() stageId: number;
  stage$: Observable<ObjectModel>;

  constructor(private saleCrudService: SaleCrudService) { }

  ngOnInit() {
    this.stage$ = this.saleCrudService.getStage(this.stageId);
  }

}
