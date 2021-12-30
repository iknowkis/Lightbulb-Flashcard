import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthComponent } from 'src/app/modals/auth/auth.component';
import { Account } from 'src/app/shared/models/flashcard.model';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {

  public authValue: Account;

  constructor(
    private modalCtrl: ModalController,

    private auth: AuthService,
  ) {
    this.getStorageAuthValue();
  }


  //Auth
  async getStorageAuthValue() {
    this.authValue = await this.auth.getAuthValue();
  }
  async openAuthModal() {
    const modal = await this.modalCtrl.create({
      component: AuthComponent,
      componentProps: {
        authValue: this.authValue,
      }
    });
    modal.onDidDismiss().then(() => {
      this.getStorageAuthValue();
    });
    return modal.present();
  }
}
