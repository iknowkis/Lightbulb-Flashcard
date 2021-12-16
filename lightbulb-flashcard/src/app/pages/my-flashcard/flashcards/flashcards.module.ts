import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlashcardsPageRoutingModule } from './flashcards-routing.module';

import { FlashcardsPage } from './flashcards.page';
import { ViewFlashcardsModule } from 'src/app/shared/components/flashcards/view-flashcards/view-flashcards.module';
import { ListCardModule } from 'src/app/shared/components/card/list-card/list-card.module';

@NgModule({
  declarations: [
    FlashcardsPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlashcardsPageRoutingModule,
    ViewFlashcardsModule,
    ListCardModule,
  ],
})
export class FlashcardsPageModule {}
