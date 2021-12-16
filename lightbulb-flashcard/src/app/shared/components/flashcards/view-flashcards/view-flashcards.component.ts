import { Component, Input } from '@angular/core';
import { Flashcards, Flashcards_Data } from 'src/app/shared/models/flashcard.model';

@Component({
  selector: 'app-view-flashcards',
  templateUrl: './view-flashcards.component.html',
  styleUrls: ['./view-flashcards.component.scss'],
})
export class ViewFlashcardsComponent {

  @Input() flashcards: Flashcards;
  
  constructor() {
  }

  getLearnedLenth(data: Flashcards_Data[]) {
    let learnedLength = data.filter(card => card.learn == true).length;
    return learnedLength ? learnedLength : 0;
  }
}