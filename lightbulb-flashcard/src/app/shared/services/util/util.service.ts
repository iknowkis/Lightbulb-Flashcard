import { Injectable } from '@angular/core';
import { Flashcards, Flashcards_Data } from '../../models/flashcard.model';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
    // private dbService: DbcrudService,
    private storageService: StorageService,
    ) { }

  async save_StorageData(data: Flashcards, index: number) {
    let existingData = await this.storageService.getStorageData();

    if (existingData) {
      let match = existingData.filter((existedData)=>existedData.id == data.id).length;
      match ? existingData.splice(index, match, data) : existingData.push(data);
      this.storageService.set('data', existingData);
    }
    else this.storageService.set('data', Array(data));
  }

  async save_CardData(selected: Flashcards, data: Flashcards_Data[], index: number) {
    if (selected.data.length) {
      // let match = existingData.filter((existedData)=>existedData == selected).length;
      // match ? existingData.splice(index, match, selected) : existingData.push(selected);
      // this.storageService.set('data', existingData);
    }
    else {
      selected.data = data;
      this.save_StorageData(selected, index);
    }
  }

  async delete_StorageData(data: Flashcards[], index: number): Promise<Flashcards[]> {
    data.splice(index, 1);
    this.storageService.set('data', data);
    return data;
  }
}