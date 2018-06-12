import { Actions, Effect, ofType } from '@ngrx/effects';

import { map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/index';
import { LayoutActionTypes, UpdateMenuColor, UpdateMenuColorSuccess } from '../actions/layout.actions';
import { menuColors } from '../../models/menu-color.model';

@Injectable()
export class LayoutEffects {
  @Effect()
  updateMenuColor$ = this.actions$.pipe(
    ofType<UpdateMenuColor>(LayoutActionTypes.UpdateMenuColor),
    map(action => action.payload),
    switchMap((colorName: string) =>
      of(menuColors.filter(menuColor => menuColor.name === colorName))
        .pipe(
          map(res => new UpdateMenuColorSuccess(res[0]))
        )
    )
  );

  constructor(
    private actions$: Actions
  ) {
  }
}
