import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '../../../core/models/product.model';
import { BudgetModel } from '../../../core/models/budget.model';
import { Observable, of } from 'rxjs';
import { ProductsActions } from '../../../product/store/actions';
import { select, Store } from '@ngrx/store';
import * as fromProducts from '../../../product/store';
import * as fromRoot from '../../../core/store';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {
  @Input() budgets: BudgetModel[];
  product$: Observable<ProductModel>;

  constructor(private store: Store<fromRoot.RootState>) { }

  ngOnInit() {
    this.getProductInfo(this.budgets);
  }

  getProductInfo(budgets: BudgetModel[]): Observable<ProductModel> {
    if (budgets.length) {
      const budget = this.getFirstBudget(budgets);
      this.store.dispatch(new ProductsActions.Select(budget.id_product));
      this.product$ = this.store.pipe(
        select(fromProducts.getSelectedProduct)
      );
    }
    return of(null);
  }

  getFirstBudget(budgetDetails: BudgetModel[]): BudgetModel {
    const [firstBudget] = budgetDetails;
    return firstBudget;
  }

}
