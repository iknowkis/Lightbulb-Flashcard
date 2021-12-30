import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Account, Flashcards, Flashcards_Data } from '../../models/flashcard.model';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(
    public firestore: AngularFirestore,
    ) {
  }
  
  dbPosts = this.firestore.collection<any>('flashcards', (ref) => ref);
  dbAccounts = this.firestore.collection<any>('accounts', (ref) => ref);

  getAccounts() {
    return this.dbAccounts.snapshotChanges();
  }
  // getSelectedAccount(id: string){
  //   return this.dbAccounts.doc(id).valueChanges();
  // }
  addAccount(account: Account){
    this.dbAccounts.add({
      name: account.name,
      password: account.password,
    });
  }
  updateAccount(id: string, account: Account){
    this.dbAccounts.doc(id).update({...{
      name: account.name,
      password: account.password,
    },
    });
  }

  getPosts() {
    return this.dbPosts.snapshotChanges();
  }
  getSelectedPost(id: string){
    return this.dbPosts.doc(id).valueChanges();
  }
  addPost(flashcards: Flashcards){
    this.dbPosts.add({
      id: flashcards.id,
      title: flashcards.title,
      tags: flashcards.tags,
      number_liked: 0,
      number_archived: 0,
      data: flashcards.data,
      // date: serverTimestamp(),
      // writer_id: account_id,
    });
  }
  updatePost(post_id: string, flashcards: Flashcards, list_flashcards_Data: Flashcards_Data[]){
    this.dbPosts.doc(post_id).update({...{
      title: flashcards.title,
      tags: flashcards.tags,
      data: list_flashcards_Data,
      // date: serverTimestamp(),
      }
    });
  }
  deletePost(post_id: string) {
    this.dbPosts.doc(post_id).delete();
  }
}