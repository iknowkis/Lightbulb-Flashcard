import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainExplorePageRoutingModule } from './main-explore-routing.module';

import { MainExplorePage } from './main-explore.page';
import { ListPostModule } from 'src/app/shared/components/post/list-post/list-post.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainExplorePageRoutingModule,
    ListPostModule,
  ],
  declarations: [MainExplorePage]
})
export class MainExplorePageModule {}
