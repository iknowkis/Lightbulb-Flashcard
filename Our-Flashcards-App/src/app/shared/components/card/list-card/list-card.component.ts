import { Component, Input } from '@angular/core';
import { OverlayEventDetail } from '@ionic/core';
import { ModalController } from '@ionic/angular';
import { ComposeCardComponent } from 'src/app/modals/compose/compose-card/compose-card.component';
import { StudyFlashcardsComponent } from 'src/app/modals/study-flashcards/study-flashcards.component';
import { Flashcards, Flashcards_Data } from 'src/app/shared/models/flashcard.model';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { FlashcardsPage } from 'src/app/pages/my-flashcard/flashcards/flashcards.page';
import { UtilService } from 'src/app/shared/services/util/util.service';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],
})
export class ListCardComponent {

  @Input() flashcards: Flashcards;
  @Input() list: Flashcards_Data[];
  @Input() isLocal: boolean;

  constructor(
    private modalCtrl: ModalController,
    private flashcardsPage: FlashcardsPage,

    private util: UtilService,
    private alert: AlertService,
    ) {
  }

  async openStudyFlashcards(i: number) {
    const modal = await this.modalCtrl.create({
      component: StudyFlashcardsComponent,
      componentProps: {
        list: this.list,
        flashcards: this.flashcards,
        index: i,
        isLocal: this.isLocal,
        slideOpts: {
          initialSlide: i,
          speed: 400,
          centeredSlides: true,
          // fadeEffect: {crossFade: true}
          // autoplay: true,
        },
      }
    });
    modal.onDidDismiss().then(()=> {
    });
    return modal.present();
  }
  
  async edit(slidingItem:any, flashcards_Data: Flashcards_Data, index: number) {
    slidingItem.close();
    const modal = await this.modalCtrl.create({
      component: ComposeCardComponent,
      componentProps: {
        flashcards: this.flashcards,
        dataBox: flashcards_Data,
        index: index,
      }
    });
    modal.onDidDismiss().then((saved: OverlayEventDetail) => {
      this.flashcardsPage.getFlashcards();
    });
    return modal.present();
  }

  delete(slidingItem:any, index: number) {
    this.alert.delete_CardData(this.flashcards, this.list, index)
      .then(result => {
        if(result) this.list = result;
        slidingItem.close();
      });
  }

  checkLearn(index: number) {
    this.list[index].learn = !this.list[index].learn;
    this.flashcards.data = this.list;
    if (this.isLocal) this.util.save_StorageData(this.flashcards);
  }
}