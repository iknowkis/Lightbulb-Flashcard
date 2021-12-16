import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyFlashcardPage } from './my-flashcard.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main-my-flashcard',
    pathMatch: 'full'
  },
  {
    path: 'main-my-flashcard',
    loadChildren: () => import('./main-my-flashcard/main-my-flashcard.module').then( m => m.MainMyFlashcardPageModule)
  },
  {
    path: 'flashcards',
    loadChildren: () => import('./flashcards/flashcards.module').then( m => m.FlashcardsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyFlashcardPageRoutingModule {}
