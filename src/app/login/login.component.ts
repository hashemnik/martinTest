import { Component, OnInit } from '@angular/core';
import { LoginModel } from './login-model';
import { LoginService } from './login.service';
import { Router } from '@angular/router'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginModel: LoginModel;
  loginForm: FormGroup;
  errorMessage: string;
  res: Boolean;
  constructor(fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.loginForm = fb.group({
      'user': [null, Validators.required],
      'password': [null, Validators.required],
    })
  }

  login($event) {

    this.res = this.loginService.login(this.loginModel);
    if (this.res == true) {
      this.router.navigate(['/wizard']);
    }
    else {
      this.errorMessage = "Error: Use martin for userName";
    }

  }
  ngOnInit() {
    this.loginModel = new LoginModel('', '');
  }

  submitForm(value: any) {
    this.res = this.loginService.login(this.loginModel);
    if (this.res == true) {
      this.router.navigate(['/wizard']);
    }
    else {
      this.errorMessage = "Error: Use martin for userName";
    }
  }

}

