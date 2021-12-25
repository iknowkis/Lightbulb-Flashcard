import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Flashcards, Flashcards_Data } from '../../models/flashcard.model';

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
  // addAccount(account: Account){
  //   this.dbAccounts.add({
  //     name: account.name,
  //     password: account.password,
  //   });
  // }
  // updateAccount(id: string, account: Account){
  //   this.dbAccounts.doc(id).update({...{
  //     name: account.name,
  //     password: account.password,
  //   },
  //   });
  // }

  getPosts() {
    return this.dbPosts.snapshotChanges();
  }
  getSelectedPost(id: string){
    return this.dbPosts.doc(id).valueChanges();
  }
  addPost(flashcards: Flashcards){
    this.dbPosts.add({
      title: flashcards.title,
      tags: flashcards.tags,
      // writer_id: account_id,
      number_liked: 0,
      number_archived: 0,
      data: flashcards.data,
      // date: serverTimestamp(),
    });
  }
  updatePost(flashcards: Flashcards, list_flashcards_Data: Flashcards_Data[], post_id: string){
    this.dbPosts.doc(post_id).update({...{
      post_title: flashcards.title,
      tags: flashcards.tags,
      // post_content: content,
      data: list_flashcards_Data,
      // date: serverTimestamp(),
      }
    });
  }
}
