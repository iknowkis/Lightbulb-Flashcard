import { Component, Input, OnInit } from '@angular/core';
import { Flashcards } from 'src/app/shared/models/flashcard.model';

@Component({
  selector: 'app-list-flashcards',
  templateUrl: './list-flashcards.component.html',
  styleUrls: ['./list-flashcards.component.scss'],
})
export class ListFlashcardsComponent implements OnInit {

  @Input() list: Flashcards[];

  constructor() { }

  ngOnInit() {}
}