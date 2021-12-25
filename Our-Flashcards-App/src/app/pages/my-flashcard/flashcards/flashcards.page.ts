import { Component, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OverlayEventDetail } from '@ionic/core';
import { ModalController } from '@ionic/angular';
import { ComposeCardComponent } from 'src/app/modals/compose/compose-card/compose-card.component';
import { Flashcards } from 'src/app/shared/models/flashcard.model';
import { list } from 'src/app/shared/models/item.model';
import { StorageService } from 'src/app/shared/services/storage/storage.service';
import { UtilService } from 'src/app/shared/services/util/util.service';
import { AlertService } from 'src/app/shared/services/alert/alert.service';

@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.page.html',
  styleUrls: ['./flashcards.page.scss'],
})
export class FlashcardsPage {
  @Output() flashcards_id: string; // Received from main-my-flashcards.page, list-flashcards
  @Output() flashcards: Flashcards;
  index: number;

  constructor(
    private route: ActivatedRoute,
    private modalCtrl: ModalController,

    private alert: AlertService,
    private storageService: StorageService,
    ) {
      this.initData();
    }

  ionViewWillEnter() {
  }

  async openComposeCardsModal() {
    const modal = await this.modalCtrl.create({
      component: ComposeCardComponent,
      componentProps: {
        flashcards: this.flashcards,
      }
    });
    modal.onDidDismiss().then((saved: OverlayEventDetail) => {
      if(saved.data) this.getFlashcards();
    });
    return modal.present();
  }

  initData() {
    this.getFlashcardsId()
    .then(()=> this.getFlashcards());
  }
  async getFlashcardsId() {
    let route = this.route.snapshot.params;
    this.flashcards_id = await route.id;
  }
  async getFlashcards() {
    let data = await this.storageService.getStorageData();
    data.map((item,i) => {
      if (item.id == this.flashcards_id) {
        this.index = i;
        this.flashcards = item;
      }
    });
    // this.flashcards = list.filter(item => item.id == this.flashcards_id)[0];
  }

  checkOffAll() {
    this.alert.checkOff_CardData(this.flashcards)
      .then(result => {
        if (result) this.flashcards = result
      });
  }
}