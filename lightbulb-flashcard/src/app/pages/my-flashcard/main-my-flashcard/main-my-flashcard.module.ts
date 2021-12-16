import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainMyFlashcardPageRoutingModule } from './main-my-flashcard-routing.module';

import { MainMyFlashcardPage } from './main-my-flashcard.page';
import { ListFlashcardsModule } from 'src/app/shared/components/flashcards/list-flashcards/list-flashcards.module';

@NgModule({
  declarations: [
    MainMyFlashcardPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainMyFlashcardPageRoutingModule,
    ListFlashcardsModule,
  ],
})
export class MainMyFlashcardPageModule {}
