import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/services/api.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';


@Component({
  selector: 'app-memberships',
  templateUrl: './memberships.component.html',
  styleUrls: ['./memberships.component.css']
})
export class MembershipsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'userId', 'membership', 'price', 'enroll', 'expire'];
  constructor(public readonly apiService: ApiService, private readonly spinnerService: SpinnerService) { }

  ngOnInit() {
    this.spinnerService.startLoading();
    this.apiService.getMemberships()
    .pipe(finalize(() => this.spinnerService.stopLoading()))
    .subscribe(res => this.apiService.memberships$.next(res))
  }
}
