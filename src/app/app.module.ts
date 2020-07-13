import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {UserService} from './services/user.service';
import { UserComponent } from './components/user/user.component';
import { AllForUsersComponent } from './components/all-for-users/all-for-users.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AllForUsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'user/:id', component: AllForUsersComponent
      }
    ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
