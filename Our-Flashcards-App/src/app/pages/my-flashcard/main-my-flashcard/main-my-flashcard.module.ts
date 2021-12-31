import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MainMyFlashcardPageRoutingModule } from './main-my-flashcard-routing.module';
import { MainMyFlashcardPage } from './main-my-flashcard.page';

import { ListFlashcardsModule } from 'src/app/shared/components/flashcards/list-flashcards/list-flashcards.module';
import { ComposeFlashcardsComponent } from 'src/app/modals/compose/compose-flashcards/compose-flashcards.component';
import { Flashcards_item } from 'src/app/shared/models/item.model';
import { Flashcards } from 'src/app/shared/models/flashcard.model';
import { PickerModule } from '@ctrl/ngx-emoji-mart';

@NgModule({
  declarations: [
    MainMyFlashcardPage,
    ComposeFlashcardsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainMyFlashcardPageRoutingModule,
    ListFlashcardsModule,
    PickerModule,
  ],
  providers: [
    Flashcards_item,
    Flashcards,
  ]
})
export class MainMyFlashcardPageModule {}