import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyFlashcardPageRoutingModule } from './my-flashcard-routing.module';

import { MyFlashcardPage } from './my-flashcard.page';

@NgModule({
  declarations: [
    MyFlashcardPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyFlashcardPageRoutingModule,
  ],
})
export class MyFlashcardPageModule {}
