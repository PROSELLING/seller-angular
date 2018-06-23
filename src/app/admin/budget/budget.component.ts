import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StepState } from '@covalent/core';
import { ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {
  id: number;
  stepperMode = 'horizontal';
  stateStep2: StepState = StepState.None;
  stateStep3: StepState = StepState.None;
  stateStep4: StepState = StepState.None;
  disabled = false;

  constructor
  (private activatedRoute: ActivatedRoute,
   private media: ObservableMedia) {
    this.activatedRoute.params.subscribe(params => {
      console.log('params', params);
      this.id = params['id'];
    });
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

  return() {
    console.log(this.id);
  }

}
