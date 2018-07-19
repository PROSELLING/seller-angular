import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StepState } from '@covalent/core';
import { ObservableMedia } from '@angular/flex-layout';
import { ClientModel } from '../../../core/models/client.model';

@Component({
  selector: 'sale-steps-component',
  templateUrl: './sale-steps.component.html',
  styleUrls: ['./sale-steps.component.scss']
})

export class SaleStepsComponent implements OnInit {
  @Input() client: ClientModel;
  @Output() clientChange = new EventEmitter();
  stepperMode = 'horizontal';
  stateStep2: StepState = StepState.None;
  stateStep3: StepState = StepState.None;
  stateStep4: StepState = StepState.None;
  disabled = false;

  constructor(private media: ObservableMedia,) {
  }

  ngOnInit() {
    this.media.subscribe(() => {
      this.stepperMode = this.getStepperMode();
    });
  }

  private getStepperMode(): string {
    if (this.media.isActive('xs')) {
      return 'vertical';
    } else {
      return 'horizontal';
    }
  }
}
