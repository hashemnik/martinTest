import { Component, OnInit } from '@angular/core';
import { LoginModel } from './login-model';
import { LoginService } from './login.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginModel : LoginModel;
  errorMessage: string;
    res:Boolean;
  constructor(private loginService: LoginService, private router: Router) { }

  login($event) {
	  
	  this.res = this.loginService.login(this.loginModel);
      if(this.res == true){
		  this.router.navigate(['/wizard']);
	  }
	  else{
		  this.errorMessage = "Error: Use martin for userName";
	  }
        
  }
  ngOnInit() {
    this.loginModel = new LoginModel('', '');
  }
    

}

