import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsPageRoutingModule } from './settings-routing.module';

import { SettingsPage } from './settings.page';
import { AuthComponent } from 'src/app/modals/auth/auth.component';

@NgModule({
  declarations: [
    SettingsPage,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsPageRoutingModule
  ],
})
export class SettingsPageModule {}
