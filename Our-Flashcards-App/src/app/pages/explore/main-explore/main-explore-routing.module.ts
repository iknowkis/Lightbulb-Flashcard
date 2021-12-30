import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainExplorePage } from './main-explore.page';

const routes: Routes = [
  {
    path: '',
    component: MainExplorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainExplorePageRoutingModule {}
