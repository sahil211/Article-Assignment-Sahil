import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ArticleStore } from './article.store';

@Injectable({ providedIn: 'root' })
export class ArticleService {

  constructor(private articleStore: ArticleStore, private http: HttpClient) {
  }


}
