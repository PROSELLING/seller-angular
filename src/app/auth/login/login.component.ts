import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { AlertService } from '../../core/services/alert.service';
import { PermissionsService } from '../../core/services/permissions.service';
import { RolesService } from '../../core/services/roles.service';
import { Store } from '@ngrx/store';
import * as fromAuth from '../store/reducers/auth.reducer';
import * as AuthActions from '../store/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor
  (private formBuilder: FormBuilder,
   private store: Store<fromAuth.State>,
   private router: Router,
   private authService: AuthService,
   private permissionsService: PermissionsService,
   private rolesService: RolesService,
   private alertService: AlertService) {
  }

  ngOnInit() {
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
    const fields = this.loginForm.value;

    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.store.dispatch(new AuthActions.Login(this.loginForm.value));
      /*this.authService.login(fields.email, fields.password)
        .subscribe(
          (res: any) => {
            console.log('response', res);
            this.authService.setSession(res.user, res.token);
            this.permissionsService.setPermissions(res.permissions);
            this.rolesService.setRoles(res.roles);
            this.router.navigate(['admin']);
          },
          error => {
            // this.alertService.error(error.message);
            console.log('error', error);
          });
      const date = new Date();
      date.setTime(date.getTime() + (36000 * 1000));
      const payload = {
        token: 'fasdf25as4df5asd4f5asdf4',
        expiresIn: date,
        user: {
          id: 2,
          email: '',
          first_name: '',
          last_name: ''
        }
      };
      /!*this.authService.setSession(payload);
      this.router.navigate(['admin']);*!/*/
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
