import { Component, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Flashcards, Flashcards_Data } from 'src/app/shared/models/flashcard.model';

@Component({
  selector: 'app-study-flashcards',
  templateUrl: './study-flashcards.component.html',
  styleUrls: ['./study-flashcards.component.scss'],
})
export class StudyFlashcardsComponent {
  @Output() list: Flashcards_Data[];
  @Output() flashcards: Flashcards;
  @Output() index: number;
  @Output() slideOpts: any;
  @Output() showAnswer = false;

  constructor(
    private modalCtrl: ModalController,
    ) {
    }
  showOrHideAnswer() {
    this.showAnswer = !this.showAnswer;
  }

  dismissModal(saved?: boolean) {
    this.modalCtrl.dismiss(saved);
  }
}