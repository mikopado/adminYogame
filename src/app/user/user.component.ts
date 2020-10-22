import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ApiService } from '../shared/services/api.service';
import { SpinnerService } from '../shared/services/spinner.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'email', 'name', 'address', 'dob', 'registered'];
  constructor(public readonly apiService: ApiService, private readonly spinnerService: SpinnerService){}

  ngOnInit(): void {
    this.spinnerService.startLoading();
    this.apiService.getUsers()
    .pipe(finalize(() => this.spinnerService.stopLoading()))
    .subscribe(r => this.apiService.users$.next(r));
  }

}
