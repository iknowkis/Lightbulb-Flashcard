import { Component, Input, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Flashcards, Flashcards_Data } from 'src/app/shared/models/flashcard.model';
import { UtilService } from 'src/app/shared/services/util/util.service';

@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.scss'],
})
export class ViewCardComponent {
  @Input() list: Flashcards_Data[];
  @Input() flashcards: Flashcards;
  @Input() index: number;
  @Input() slideOpts: any;
  @Input() showAnswer: boolean;
  tapped = false;
  constructor(
    private util: UtilService,
    ) {
  }
  
  // For slides
  @ViewChild(IonSlides) slides: IonSlides;
  next(slides, forward: boolean) {
    if (this.index < this.list.length-1 && forward === true) {
      this.index+=1;
    }
    else if (0 < this.index && forward === false) {
      this.index-=1;
    }
    slides.slideTo(this.index);
  }
  nextByRange(slides, event) {
    slides.slideTo(event.detail.value);
  }
  async onSlideWillChange(event: any) {
    this.tapped = false;
    this.index = await event.target.getActiveIndex();
  }
  async onSlideTapped(event: any) {
    if(!this.showAnswer) this.tapped = !this.tapped;
  }

  checkLearn(index: number) {
    this.list[index].learn = !this.list[index].learn;
    this.flashcards.data = this.list;
    this.util.save_StorageData(this.flashcards);
  }
}