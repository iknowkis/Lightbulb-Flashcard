import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { Account, Flashcards, Flashcards_Data } from '../../models/flashcard.model';
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
    let storage_index: number;
    let existingData = await this.storageService.getStorageData();
    if (existingData == undefined) existingData = [];
    else {
      storage_index = await this.getIndex(existingData, data);
    }

    if (data.access) {
      if (storage_index!=undefined) {
        if (data.post_id==undefined) {
          this.dbService.addPost(data);
        }
        else this.dbService.updatePost(data.post_id, data, data.data);
      }
      else {
        this.dbService.addPost(data);
      }
    }

    if (storage_index!=undefined) {
      if (data.access==false && data.post_id) {
        this.dbService.deletePost(data.post_id);
        data.post_id = undefined;
        existingData.splice(storage_index, 1, data);
        this.storageService.set('data', existingData);
      }
      else if (data.access && data.post_id==undefined) {
        this.getPostId(data.id).then(id=> {
          data.post_id = id;
          existingData.splice(storage_index, 1, data);
          this.storageService.set('data', existingData);
        });
      }
      else {
        existingData.splice(storage_index, 1, data);
        this.storageService.set('data', existingData);
      }
    }
    else {
      this.getPostId(data.id).then(id=> {
        data.post_id = id;
        existingData.push(data);
        this.storageService.set('data', existingData);
      });
    }
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
    if (list[index].access) this.dbService.deletePost(list[index].post_id);
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
  // Get id of post
  getPostId(flashcards_id: string): Promise<string> {
    return new Promise(resolve => {
      this.dbService.getPosts().subscribe(list => {
        let post_id: string;
        list.map((e: any) => {
          if (e.payload.doc.data().id==flashcards_id) {
            post_id = e.payload.doc.id
          }
        });
        resolve(post_id);
      });
    })
  }
  // Get selected Post
  getSelectedPost(id: string): Promise<string> {
    return new Promise(resolve => {
      this.dbService.getSelectedPost(id).pipe(
        // take(1)
        ).subscribe(post => {
          resolve(post);
      })
    })
  }

  // Get account
  getAccountWithId(account: Account): Promise<object> {
    let dbAccount: object;
    return new Promise(resolve => {
      this.dbService.getAccounts().pipe(
         take(1)
         ).subscribe((data:any) => {
          data.map(e=> {
            if(e.payload.doc.data().name == account.name) {
              dbAccount =  {
                id: e.payload.doc.id,
                ...e.payload.doc.data(),
              } as Account;
            }
          });
          resolve(dbAccount);
        })
    })
  }
}