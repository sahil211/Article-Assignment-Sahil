import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { filter, Observable, take } from 'rxjs';
import { Article } from './article.model';
import { ArticleStore, ArticleState } from './article.store';

@Injectable({ providedIn: 'root' })
export class ArticleQuery extends Query<ArticleState> {

    constructor(protected override store: ArticleStore) {
        super(store);
    }

    getArticles(): Observable<Article[]> {
        return this.select(state => state.articles);
    }

    getLoaded(): Observable<boolean> {
        return this.select(state => state.isLoaded).pipe(
            take(1),
            filter(res => !res),
        );
    }

    getLoading(): Observable<boolean> {
        return this.selectLoading();
    }

}
