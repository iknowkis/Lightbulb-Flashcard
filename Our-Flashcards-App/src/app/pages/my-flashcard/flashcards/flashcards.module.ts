import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlashcardsPageRoutingModule } from './flashcards-routing.module';

import { FlashcardsPage } from './flashcards.page';
import { ViewFlashcardsModule } from 'src/app/shared/components/flashcards/view-flashcards/view-flashcards.module';
import { ListCardModule } from 'src/app/shared/components/card/list-card/list-card.module';
import { StudyFlashcardsComponent } from 'src/app/modals/study-flashcards/study-flashcards.component';
import { ViewCardModule } from 'src/app/shared/components/card/view-card/view-card.module';
import { ComposeCardComponent } from 'src/app/modals/compose/compose-card/compose-card.component';
import { Flashcards, Flashcards_Data } from 'src/app/shared/models/flashcard.model';

@NgModule({
  declarations: [
    FlashcardsPage,
    StudyFlashcardsComponent,
    ComposeCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlashcardsPageRoutingModule,
    ViewFlashcardsModule,
    ListCardModule,
    ViewCardModule,
  ],
  providers: [
    Flashcards_Data,
    Flashcards,
  ]
})
export class FlashcardsPageModule {}
