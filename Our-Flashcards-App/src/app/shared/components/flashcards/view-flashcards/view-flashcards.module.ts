import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ViewFlashcardsComponent } from './view-flashcards.component';



@NgModule({
  declarations: [
    ViewFlashcardsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ViewFlashcardsComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ViewFlashcardsModule { }
