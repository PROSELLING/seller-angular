import { AuthActionsUnion, AuthActionTypes } from '../actions/auth.actions';
import { UserModel } from '../../../core/models/user.model';

export interface State {
  loggedIn: boolean;
  token: string;
  user: UserModel | null;
}

export const initialState: State = {
  loggedIn: false,
  token: '',
  user: null,
};

export function reducer(state = initialState, action: AuthActionsUnion): State {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess: {
      return {
        ...state,
        loggedIn: true,
        user: action.payload.user,
      };
    }

    case AuthActionTypes.Logout: {
      return initialState;
    }

    case AuthActionTypes.SetBearerToken: {
      return {
        ...state,
        token: action.payload
      }
    }

    default: {
      return state;
    }
  }
}

export const getLoggedIn = (state: State) => state.loggedIn;
export const getUser = (state: State) => state.user;
