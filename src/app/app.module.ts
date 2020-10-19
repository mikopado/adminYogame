import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MemberModule } from './member/member.module';
import { NavbarModule } from './navbar/navbar.module';
import { ClassesModule } from './classes/classes.module';
import { MembershipsComponent } from './memberships/memberships/memberships.component';
import { MembershipsModule } from './memberships/memberships.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MemberModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NavbarModule,
    ClassesModule,
    MembershipsModule
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
