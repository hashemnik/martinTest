import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WizardComponent } from './wizard/wizard.component';

import { LoginService } from './login/login.service';
import { WizardService } from './wizard/wizard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WizardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    MaterialModule.forRoot(),
    RouterModule.forRoot([
        { path: 'wizard', component: WizardComponent },
        { path: '', component: LoginComponent }
    ])
  ],
  providers: [LoginService,WizardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
