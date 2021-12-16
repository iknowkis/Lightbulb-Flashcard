import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListCardComponent } from './list-card.component';



@NgModule({
  declarations: [
    ListCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ListCardComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ListCardModule { }
