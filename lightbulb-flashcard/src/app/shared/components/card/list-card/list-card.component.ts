import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StudyFlashcardsComponent } from 'src/app/modals/study-flashcards/study-flashcards.component';
import { Flashcards_Data } from 'src/app/shared/models/flashcard.model';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],
})
export class ListCardComponent {

  @Input() data: Flashcards_Data[];

  constructor(
    private modalCtrl: ModalController,
    ) {
  }

  async openStudyFlashcards(i: number) {
    const modal = await this.modalCtrl.create({
      component: StudyFlashcardsComponent,
      componentProps: {
        data: this.data,
        index: i,
        slideOpts: {
          initialSlide: i,
          speed: 400,
          centeredSlides: true,
          fadeEffect:
          {
              crossFade: true
          }
          // autoplay: true,
        },
      }
    });
    modal.onDidDismiss().then(()=> {
    });
    return modal.present();
  }  
  
  delete(data) {
    console.log(data)
  }
}