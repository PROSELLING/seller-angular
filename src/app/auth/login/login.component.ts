import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { AlertService } from '../../core/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor
  (private formBuilder: FormBuilder,
   private router: Router,
   private authService: AuthService,
   private alertService: AlertService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [
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

    if (fields.username && fields.password) {
      /*this.authService.login(fields.username, fields.password)
        .subscribe(
          res => {
            this.authService.setSession(res);
            this.router.navigate(['admin']);
          },
          error => {
            this.alertService.error(error.message);
          });*/
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
      this.authService.setSession(payload);
      this.router.navigate(['admin']);
    }
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
