import { Component, Input, OnInit } from '@angular/core';
import { SaleCrudService } from '../../../core/services/crud/sale-crud.service';
import { Observable } from 'rxjs';
import { ObjectModel } from '../../../core/models/meta.model';
import { ClientModel } from '../../../core/models/client.model';

@Component({
  selector: 'app-sale-stage-icon',
  templateUrl: './sale-stage-icon.component.html',
  styleUrls: ['./sale-stage-icon.component.scss']
})
export class SaleStageIconComponent implements OnInit {
  @Input() stageId: number;
  @Input() client: ClientModel;
  stage$: Observable<ObjectModel>;
  showPhoto = false;

  constructor(private saleCrudService: SaleCrudService) {
  }

  ngOnInit() {
    this.stage$ = this.saleCrudService.getStage(this.stageId);
    if (this.client) {
      if (this.client.photo) {
        this.showPhoto = true;
      }
    }
  }

}
