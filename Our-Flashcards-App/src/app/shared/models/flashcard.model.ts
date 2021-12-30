export class Flashcards {
    // liked_post_id_list : Array<string>;
    // followed_id_list: Array<string>;
    id: string;
    post_id?: string
    access: boolean;
    icon?: string;
    title?: string;
    tags?: string[];
    data?: Flashcards_Data[];
}
export class Flashcards_Data {
    question: string;
    answer: string;
    learn: boolean;
}
export class Post {
    // liked_post_id_list : Array<string>;
    // followed_id_list: Array<string>;
    id?: string;
    post_id?: string
    title?: string;
    tags?: string[];
    data?: Flashcards_Data[];
    number_archived?: number;
    number_liked?: number;
}
export class Account {
    // liked_post_id_list : Array<string>;
    // followed_id_list: Array<string>;
    id?: string;
    name: string;
    password: string;
}