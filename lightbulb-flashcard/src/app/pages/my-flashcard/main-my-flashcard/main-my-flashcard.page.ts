import { Component, OnInit, Output } from '@angular/core';
import { Flashcards } from 'src/app/shared/models/flashcard.model';
import { list } from 'src/app/shared/models/item.model';

@Component({
  selector: 'app-main-my-flashcard',
  templateUrl: './main-my-flashcard.page.html',
  styleUrls: ['./main-my-flashcard.page.scss'],
})
export class MainMyFlashcardPage implements OnInit {

  @Output() list: Flashcards[];

  constructor() { }

  ngOnInit() {
    this.list = list;
  }
}
