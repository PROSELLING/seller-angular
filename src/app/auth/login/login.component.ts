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

    if (fields.email && fields.password) {
      this.authService.login(fields.email, fields.password)
        .subscribe(
          res => {
            console.log('response', res);
            /*this.authService.setSession(res);
            this.router.navigate(['admin']);*/
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
      /*this.authService.setSession(payload);
      this.router.navigate(['admin']);*/
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
