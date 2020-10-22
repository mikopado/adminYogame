import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/authenticationService';

@Component({
  selector: 'app-logout',
  template: ''
})
export class SignOutComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.signOut();
  }

  signOut(){
    this.authService.signOut()
    .then(res => { 
      this.router.navigate(['/']);
    })
    .catch(err => console.log(err));
  }

}
