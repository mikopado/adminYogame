import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/authenticationService';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false
  returnUrl: string;
  error = '';  

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    public readonly spinnerService: SpinnerService
  ) {    
  }

  ngOnInit() {   
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.spinnerService.startLoading();
    this.authenticationService.signIn(this.f.username.value, this.f.password.value)
    .then((user) => {
      this.router.navigate([this.returnUrl]);
      this.spinnerService.stopLoading()
    })
    .catch(err => {
      this.error = err.message;
      this.spinnerService.stopLoading()
    });    
       
  } 

  logOut() {    
    this.authenticationService.signOut()
    .then(resp => {
      this.router.navigate([this.returnUrl]);
    })
    .catch(err => {
      console.log(err);
    });
  }

}
