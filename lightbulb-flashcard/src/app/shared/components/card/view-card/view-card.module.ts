import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ViewCardComponent } from './view-card.component';



@NgModule({
  declarations: [
    ViewCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ViewCardComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ViewCardModule { }
