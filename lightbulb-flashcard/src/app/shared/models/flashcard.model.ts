export class Flashcards {
    // liked_post_id_list : Array<string>;
    // followed_id_list: Array<string>;
    id?: string;
    title: string;
    access: boolean;
    data: Flashcards_Data[];
}
export class Flashcards_Data {
    question: string;
    answer: string;
    learn: boolean;
}