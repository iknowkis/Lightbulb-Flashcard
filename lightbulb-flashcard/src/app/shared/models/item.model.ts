import { Flashcards } from "./flashcard.model";

export const list: Flashcards[] = [
  {
    id: '1d2ds',
    title: '📕 Test 1',
    access: true,
    data: [
        {
        question: 'ABC',
        answer: '12345',
        learn: true,
        }, {
        question: 'DEF',
        answer: '6789',
        learn: false,
        }, {
        question: 'GHI',
        answer: '13579',
        learn: false,
        }
    ],
  }, {
    id: '3d2a',
    title: '📘 Test 2',
    access: false,
    data: [
        {
        question: 'QQQ',
        answer: '111111',
        learn: false,
        }, {
        question: 'WWW',
        answer: '222222',
        learn: false,
        }, {
        question: 'EEE',
        answer: '333333',
        learn: false,
        }
    ],
  }
]