import { Injectable } from '@angular/core';
import { Flashcards, Flashcards_Data } from '../../models/flashcard.model';
import { DbService } from '../db/db.service';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
    private dbService: DbService,
    private storageService: StorageService,
    ) { }

  async save_StorageData(data: Flashcards) {
    let existingData = await this.storageService.getStorageData();

    if (existingData) {
      let index = await this.getIndex(existingData, data);
      let match = existingData.filter(existedData=>existedData.id == data.id).length;
      match ? existingData.splice(index, match, data) : existingData.push(data);
      this.storageService.set('data', existingData);
    }
    else this.storageService.set('data', Array(data));
  }
  async save_CardData(selected: Flashcards, data: Flashcards_Data[]) {
    data.reverse();
    if (selected.data.length) {
      data.map(el => selected.data.push(el));
      this.save_StorageData(selected);
    }
    else {
      selected.data = data;
      this.save_StorageData(selected);
    }
  }
  async edit_CardData(selected: Flashcards, list_cards: Flashcards_Data[], index: number) {
    list_cards.map((el,i) => selected.data.splice(index, ((i==0) ? 1 : 0), el));
    this.save_StorageData(selected);
  }

  async delete_StorageData(list: Flashcards[], index: number): Promise<Flashcards[]> {
    list.splice(index, 1);
    this.storageService.set('data', list);
    return list;
  }
  async delete_CardData(selected: Flashcards, list_cards:Flashcards_Data[], index: number): Promise<Flashcards_Data[]> {
    list_cards.splice(index, 1);
    selected.data = list_cards;
    this.save_StorageData(selected);
    return list_cards;
  }

  // Get index of list_Flashcards
  async getIndex(flashcards:Flashcards[], selected: Flashcards): Promise<number> {
    let index_list_flashcards: number;
    flashcards.map((data:Flashcards, idx:number) => {
      if (data.id == selected.id) index_list_flashcards = idx;
    })
    return index_list_flashcards;
  }

    
  // DB
  // Get list of posts
  getPosts() {
    return new Promise(resolve => {
      this.dbService.getPosts().subscribe(list => {
        let posts = list.map((e: any) => {
            return {
              post_id: e.payload.doc.id,
              ...e.payload.doc.data(),
            } as any;
        });
        // posts.sort((a,b) => b.date - a.date);
        resolve(posts);
      });
    })
  }
}