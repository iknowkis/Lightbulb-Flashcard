import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { MainTabBarComponent } from 'src/app/shared/components/main-tab-bar/main-tab-bar.component';

@NgModule({
  declarations: [
    MainPage,
    MainTabBarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule
  ],
  exports: [MainPage],
})
export class MainPageModule {}
