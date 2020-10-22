import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembershipsComponent } from './memberships/memberships.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MembershipsComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatTableModule
  ]
})
export class MembershipsModule { }
