import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListPostComponent } from './list-post.component';

@NgModule({
  declarations: [
    ListPostComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ListPostComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ListPostModule { }