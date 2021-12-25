import { Component, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Flashcards, Flashcards_Data } from 'src/app/shared/models/flashcard.model';
import { initCard } from 'src/app/shared/models/item.model';
import { UtilService } from 'src/app/shared/services/util/util.service';

@Component({
  selector: 'app-compose-card',
  templateUrl: './compose-card.component.html',
  styleUrls: ['./compose-card.component.scss'],
})
export class ComposeCardComponent {

  flashcards: Flashcards; // Selected
  flashcards_Data: Flashcards_Data[];
  dataBox: Flashcards_Data;
  index: number;

  constructor(
    private modalCtrl: ModalController,

    private util: UtilService,
    ) {
      if (this.flashcards_Data == null) this.dataBox = initCard();
    }

  ionViewWillEnter() {
  }

  @ViewChild('textQuestion') textQuestion;
  @ViewChild('textAnswer') textAnswer;
  addDataBox() {
    if (this.dataBox.question && this.dataBox.answer) {
      if (this.flashcards_Data) this.flashcards_Data.unshift(this.dataBox);
      else this.flashcards_Data = Array(this.dataBox);
      this.dataBox =  initCard();
    }
    if (this.dataBox.question=='') this.textQuestion.setFocus();
    else this.textAnswer.setFocus();
  }
  removeDataBox(i: number) {
    this.flashcards_Data.splice(i,1);
  }
  save() {
    if (this.index==undefined) this.util.save_CardData(this.flashcards, this.flashcards_Data);
    else this.util.edit_CardData(this.flashcards, this.flashcards_Data, this.index);
    this.dismissModal(true);
  }

  dismissModal(saved?: boolean) {
    this.modalCtrl.dismiss(saved);
  }
}
