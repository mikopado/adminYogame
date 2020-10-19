import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { ClassesComponent } from './classes.component';

@NgModule({
  declarations: [
    ClassesComponent
  ],
  imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      MatTableModule
  ]
})
export class ClassesModule { }
