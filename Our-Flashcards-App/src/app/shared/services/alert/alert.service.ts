import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Flashcards } from '../../models/flashcard.model';
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
}