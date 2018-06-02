import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { UserModel } from '../models/user.model';


export const CURRENT_USER = 'currentUser';
export const BEARER_TOKEN = 'bearer_token';
export const TOKEN_EXPIRATION = 'token_expiration';

export interface State {
  user: UserModel;
  token: string;
  expiration: string;
  loading: boolean;
  isAuthenticated: boolean;

  [key: string]: any;
}

const state = {
  user: {
    id: null,
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    imagen: ''
  },
  token: '',
  expiration: '',
  loading: false,
  isAuthenticated: false
};

const store = new BehaviorSubject<State>(state);

@Injectable()
export class StoreService {
  private store = store;
  private changes = store.asObservable();

  constructor() {
    this.initialize();
  }

  private initialize() {
    const newState = {
      user: JSON.parse(localStorage.getItem(CURRENT_USER)),
      token: JSON.parse(localStorage.getItem(BEARER_TOKEN)),
      // expiration: JSON.parse(localStorage.getItem(TOKEN_EXPIRATION)),
      isAuthenticated: false
    };

    if (newState.user) {
      newState.isAuthenticated = true;
    }

    this.setNewState(newState);
  }

  private setState(newState: State) {
    this.store.next(newState);
  }

  getObservable(): Observable<State> {
    return this.changes;
  }

  getState(): State {
    return this.store.getValue();
  }

  setSession(user: UserModel, token: string) {
    const newState = this.getState();
    newState.user = user;

    if (user && user.id) {
      newState.isAuthenticated = true;
    } else {
      newState.isAuthenticated = false;
    }

    this.setState(newState);
  }

  getUser(): UserModel {
    if (this.getState().user && this.getState().user.id) {
      return this.getState().user;
    }
    return null;
  }

  setLoading(loading: boolean) {
    const newState = this.getState();
    newState.loading = loading;
    this.setState(newState);
  }

  getLoading(): boolean {
    return this.getState().loading;
  }

  clearState() {
    const cleanState = {
      user: {
        id: null,
        email: '',
        username: '',
        first_name: '',
        last_name: '',
        imagen: ''
      },
      token: '',
      expiration: '',
      loading: false,
      isAuthenticated: false
    };
    this.setState(cleanState);
  }

  getIsAuthenticated(): boolean {
    return this.getState().isAuthenticated;
  }

  setNewState(args: any) {
    const newState = this.getState();
    Object.keys(newState).forEach((key) => {
      if (args[key] || args[key] === false) {
        newState[key] = args[key];
      }
    });
    this.setState(newState);
  }
}
