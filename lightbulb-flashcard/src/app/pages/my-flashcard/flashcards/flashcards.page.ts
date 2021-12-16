import { Component, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flashcards } from 'src/app/shared/models/flashcard.model';
import { list } from 'src/app/shared/models/item.model';

@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.page.html',
  styleUrls: ['./flashcards.page.scss'],
})
export class FlashcardsPage {
  @Output() flashcards_id: string; // Received from main-my-flashcards.page, list-flashcards
  @Output() flashcards: Flashcards;

  constructor(
    private route: ActivatedRoute,
    ) {
      this.initData();
    }

  ionViewWillEnter() {
  }

  initData() {
    this.getFlashcardsId()
    .then(()=> this.getFlashcards());
  }
  async getFlashcardsId() {
    let route = this.route.snapshot.params;
    this.flashcards_id = await route.id;
  }
  getFlashcards() {
    this.flashcards = list.filter(item => item.id == this.flashcards_id)[0];
  }
}