import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './shared/authenticationService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.authenticationService.currentAuthenticatedUser();
  }
 constructor(private readonly authenticationService: AuthenticationService){}
}
