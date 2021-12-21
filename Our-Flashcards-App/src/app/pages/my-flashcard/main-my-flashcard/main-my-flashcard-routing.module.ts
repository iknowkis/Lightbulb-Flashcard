import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainMyFlashcardPage } from './main-my-flashcard.page';

const routes: Routes = [
  {
    path: '',
    component: MainMyFlashcardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainMyFlashcardPageRoutingModule {}
