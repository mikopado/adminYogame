import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClassesModule } from './classes/classes.module';
import { MembershipsModule } from './memberships/memberships.module';
import { UserModule } from './user/user.module';
import { AppConfigService } from './app-config.service';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';
import { AuthenticationService } from './shared/authenticationService';
import { AuthGuard } from './shared/services/auth-guard.service';

export function appInitializer(
  appConfigService: AppConfigService,
) {
  return async () => {
    await appConfigService.load();
  };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    ClassesModule,
    MembershipsModule,
    LoginModule
   ],
  bootstrap: [AppComponent],
  providers:[
    AppConfigService,
    { 
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      deps: [AppConfigService], 
      multi: true 
    },
    AuthGuard,
    AuthenticationService
  ]
})
export class AppModule { }
