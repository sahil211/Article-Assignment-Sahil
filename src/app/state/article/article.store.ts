import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Article } from './article.model';

export interface ArticleState {
    articles: Article[];
    isLoaded: boolean;
}

export function createInitialState(): ArticleState {
    return {
        articles: [],
        isLoaded: false
    };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'article' })
export class ArticleStore extends Store<ArticleState> {

    constructor() {
        super(createInitialState());
    }

}
