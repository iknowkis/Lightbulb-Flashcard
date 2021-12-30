import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'main-explore',
    pathMatch: 'full'
  },
  {
    path: 'main-explore',
    loadChildren: () => import('./main-explore/main-explore.module').then( m => m.MainExplorePageModule)
  },
  {
    path: 'flashcards',
    loadChildren: () => import('../my-flashcard/flashcards/flashcards.module').then( m => m.FlashcardsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExplorePageRoutingModule {}
