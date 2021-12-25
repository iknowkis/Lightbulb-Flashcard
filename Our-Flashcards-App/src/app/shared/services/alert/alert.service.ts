import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Flashcards, Flashcards_Data } from '../../models/flashcard.model';
import { UtilService } from '../util/util.service';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private alrtCtrl: AlertController,

    private util: UtilService,
    ) { }

  
  async delete_StorageData(data: Flashcards[], index: number): Promise<Flashcards[]> {
    return new Promise(async resolve => {
      const alert = await this.alrtCtrl.create({
        header: `Delete flashcards`,
        message: `Do you really want to delete this flashcards?`,
        buttons: [{
            text: 'Agree',
            handler: () => {
              let result = this.util.delete_StorageData(data, index);
              resolve(result);
            },
          }, {
            text: 'Disagree',
            role: 'cancel',
            handler: () => resolve(null),
          }]
      });
      await alert.present();
    })
  }  
  async delete_CardData(flashcards: Flashcards, list_cards:Flashcards_Data[], index: number): Promise<Flashcards_Data[]> {
    return new Promise(async resolve => {
      const alert = await this.alrtCtrl.create({
        header: `Delete Card`,
        message: `Do you really want to delete this Card?`,
        buttons: [{
            text: 'Agree',
            handler: () => {
              let result = this.util.delete_CardData(flashcards, list_cards, index);
              resolve(result);
            },
          }, {
            text: 'Disagree',
            role: 'cancel',
            handler: () => resolve(null),
          }]
      });
      await alert.present();
    })
  }

  async checkOff_CardData(flashcards: Flashcards): Promise<Flashcards> {
    return new Promise(async resolve => {
      const alert = await this.alrtCtrl.create({
        header: `Check Off All`,
        message: `Do you really want to check off all learning?`,
        buttons: [{
            text: 'Agree',
            handler: () => {
              flashcards.data.map(card => card.learn = false);
              this.util.save_StorageData(flashcards);
              resolve(flashcards);
            },
          }, {
            text: 'Disagree',
            role: 'cancel',
            handler: () => resolve(null),
          }]
      });
      await alert.present();
    })
  }
}