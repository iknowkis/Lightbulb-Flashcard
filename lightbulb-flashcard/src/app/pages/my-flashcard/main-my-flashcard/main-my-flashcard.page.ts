import { Component, OnInit, Output } from '@angular/core';
import { OverlayEventDetail } from '@ionic/core';
import { ModalController } from '@ionic/angular';

import { ComposeFlashcardsComponent } from 'src/app/modals/compose/compose-flashcards/compose-flashcards.component';
import { Flashcards } from 'src/app/shared/models/flashcard.model';
import { list } from 'src/app/shared/models/item.model';

import { StorageService } from 'src/app/shared/services/storage/storage.service';
import { UtilService } from 'src/app/shared/services/util/util.service';

@Component({
  selector: 'app-main-my-flashcard',
  templateUrl: './main-my-flashcard.page.html',
  styleUrls: ['./main-my-flashcard.page.scss'],
})
export class MainMyFlashcardPage {

  @Output() list: Flashcards[];

  constructor(
    private modalCtrl: ModalController,

    private util: UtilService,
    private storageService: StorageService,
  ) {
    this.storageService.create();
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
    modal.onDidDismiss().then((saved: OverlayEventDetail) => {
      if(saved) this.getData();
    });
    return modal.present();
  }

}