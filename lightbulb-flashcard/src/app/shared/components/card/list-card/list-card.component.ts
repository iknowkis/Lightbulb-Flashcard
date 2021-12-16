import { Component, Input, OnInit } from '@angular/core';
import { Flashcards_Data } from 'src/app/shared/models/flashcard.model';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],
})
export class ListCardComponent implements OnInit {

  @Input() data: Flashcards_Data[];

  constructor() {
  }

  ngOnInit() {
  }

}
