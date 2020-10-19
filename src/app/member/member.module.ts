import { NgModule } from '@angular/core';
import { MemberComponent } from './member.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    MemberComponent
  ],
  imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      MatTableModule
  ]
})
export class MemberModule { }
