import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListFlashcardsComponent } from './list-flashcards.component';



@NgModule({
  declarations: [
    ListFlashcardsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ListFlashcardsComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ListFlashcardsModule { }
