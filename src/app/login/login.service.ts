import { Injectable } from '@angular/core';

import { LoginModel } from './login-model';

@Injectable()
export class LoginService {

  constructor() { }

  login(loginModel: LoginModel): Boolean {
	if(loginModel.username == 'martin')
		return true;
	else return false;
  }
}
