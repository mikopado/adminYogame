import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ApiService } from '../shared/services/api.service';
import { SpinnerService } from '../shared/services/spinner.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'userId', 'class', 'teacher', 'date', 'timeslot', 'room', 'bookedAt'];
  constructor(public readonly apiService: ApiService,  private readonly spinnerService: SpinnerService) { }

  ngOnInit() {
    this.spinnerService.startLoading();
    this.apiService.getBookedClasses()
    .pipe(finalize(() => this.spinnerService.stopLoading()))
    .subscribe(r => this.apiService.bookedClasses$.next(r));
  }

}
