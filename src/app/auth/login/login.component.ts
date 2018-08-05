import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthActions } from '../store/actions';
import * as fromAuth from '../store';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  wallpaperUrl: string;

  constructor
  (private formBuilder: FormBuilder,
   private store: Store<fromAuth.State>) {
  }

  ngOnInit() {
    this.wallpaperUrl = 'http://vunature.com/wp-content/uploads/2016/11/lakes-nevada-big-spain-sierra-trees-canyon-lake-snow-mountains-pine-photo-nature-hd-1920x1080.jpg';
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        Validators.required
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(4)
        ]
      ]
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.store.dispatch(new AuthActions.Login(this.loginForm.value));
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
