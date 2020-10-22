import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarModule } from './navbar/navbar.module';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    MatProgressSpinnerModule
  ],
  exports: [NavbarComponent, SpinnerComponent]
})
export class SharedModule { }
