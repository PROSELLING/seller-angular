import { NgModule } from '@angular/core';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule } from '@covalent/core/steps';
import { CovalentFileModule } from '@covalent/core';


@NgModule({
  imports: [
    CovalentFileModule,
    CovalentLayoutModule,
    CovalentStepsModule,
  ],
  exports: [
    CovalentFileModule,
    CovalentLayoutModule,
    CovalentStepsModule,
  ]
})
export class AppCovalentModule {
}
