import { Injectable } from "@angular/core";
import { Flashcards } from "./flashcard.model";
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



export const list: Flashcards[] = [
  {
    id: '1d2ds',
    title: '📕 Test 1',
    access: true,
    data: [
        {
        question: '데모를보고 로고에 적용된 복잡한 애니메이션 시퀀스를 발견했다면 많은 코드가 있습니다! ',
        answer: '데모를보고 로고에 적용된 복잡한 애니메이션 시퀀스를 발견했다면 많은 코드가 있습니다! 다행히도 저는 이것을 직접 코딩하지 않았습니다. 대신 Bounce.js를 방문 했습니다 .데모를보고 로고에 적용된 복잡한 애니메이션 시퀀스를 발견했다면 많은 코드가 있습니다! 다행히도 저는 이것을 직접 코딩하지 않았습니다. 대신 Bounce.js를 방문 했습니다 .데모를보고 로고에 적용된 복잡한 애니메이션 시퀀스를 발견했다면 많은 코드가 있습니다! 다행히도 저는 이것을 직접 코딩하지 않았습니다. 대신 Bounce.js를 방문 했습니다 . 데모를보고 로고에 적용된 복잡한 애니메이션 시퀀스를 발견했다면 많은 코드가 있습니다! 다행히도 저는 이것을 직접 코딩하지 않았습니다. 대신 Bounce.js를 방문 했습니다 . 데모를보고 로고에 적용된 복잡한 애니메이션 시퀀스를 발견했다면 많은 코드가 있습니다! 다행히도 저는 이것을 직접 코딩하지 않았습니다.',
        learn: true,
        }, {
        question: 'DEF',
        answer: '6789',
        learn: false,
        }, {
        question: 'GHI',
        answer: '13579',
        learn: true,
        }, {
        question: 'DEF',
        answer: '6789',
        learn: true,
        }, {
        question: 'GHI',
        answer: '13579',
        learn: false,
        }, {
        question: 'GHI',
        answer: '13579',
        learn: false,
        }, {
        question: 'DEF',
        answer: '6789',
        learn: true,
        }, {
        question: 'GHI',
        answer: '13579',
        learn: false,
        }
    ],
  }, {
    id: '3d2a',
    title: '🔌  Test 2',
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
  }, {
    id: '3d2a',
    title: '🔋 Battery',
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
  }, {
    id: '3d2a',
    title: '📡 Weawdx',
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
  }, {
    id: '3d2a',
    title: '📞 Apple 2',
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
  }, {
    id: '3d2a',
    title: '⏳ dwds 2',
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
  }, {
    id: '3d2a',
    title: '🕰 기사 시험',
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
  }, {
    id: '3d2a',
    title: '⏰ How to drive',
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
  }, {
    id: '3d2a',
    title: '⏲ 국어 시험 관련',
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