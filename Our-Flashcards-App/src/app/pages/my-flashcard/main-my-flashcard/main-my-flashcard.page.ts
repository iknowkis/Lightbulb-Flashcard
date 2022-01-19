import { Component, Output } from '@angular/core';
import { OverlayEventDetail } from '@ionic/core';
import { ModalController } from '@ionic/angular';

import { ComposeFlashcardsComponent } from 'src/app/modals/compose/compose-flashcards/compose-flashcards.component';
import { Flashcards } from 'src/app/shared/models/flashcard.model';

import { StorageService } from 'src/app/shared/services/storage/storage.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { MainTabBarComponent } from 'src/app/shared/components/main-tab-bar/main-tab-bar.component';

@Component({
  selector: 'app-main-my-flashcard',
  templateUrl: './main-my-flashcard.page.html',
  styleUrls: ['./main-my-flashcard.page.scss'],
})
export class MainMyFlashcardPage {

  @Output() list: Flashcards[];

  constructor(
    private modalCtrl: ModalController,
    private tabBar: MainTabBarComponent,
    
    private auth: AuthService,
    private storageService: StorageService,
  ) {
    this.auth.initAuth();
  }

  ionViewWillEnter() {
    this.getData();
  }

  async getData() {
    this.list = await this.storageService.getStorageData();
  }
  async openComposeFlashcardsModal() {
    const modal = await this.modalCtrl.create({
      component: ComposeFlashcardsComponent,
    });
    modal.onDidDismiss().then(async (saved: OverlayEventDetail) => {
      if(saved.data) {
        await this.getData();
        await this.tabBar.getData(this.list.length);
      }
    });
    return modal.present();
  }

}