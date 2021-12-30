import { Injectable } from "@angular/core";
import { Account, Flashcards } from "./flashcard.model";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class Flashcards_item {
    access = access_item;
}
export const access_item  = [
  { name: 'Public', value: true },
  { name: 'Private', value: false }
];
export function initFlashcards() {
    return {
      id: uuidv4(),
      access: true,
      icon: '💡',
      title: '',
      tags: [],
      data: [],
    }
}

export function initCard() {
  return {
    question: '',
    answer: '',
    learn: false,
  }
}


export function initAccount_util(): Account {
  return {
    name: `User_${uuidv4().slice(0,4)}`,
    password: uuidv4().slice(0,8),
  }
}