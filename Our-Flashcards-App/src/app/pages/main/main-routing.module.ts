import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'my-flashcard',
    pathMatch: 'full',
  },
  {
    path: 'my-flashcard',
    loadChildren: () => import('../../pages/my-flashcard/my-flashcard.module').then( m => m.MyFlashcardPageModule)
  },
  {
    path: 'explore',
    loadChildren: () => import('../../pages/explore/explore.module').then( m => m.ExplorePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('../../pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
