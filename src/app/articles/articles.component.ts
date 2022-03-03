import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { ArticleQuery } from '../state/article/article.query';
import { switchMap } from 'rxjs';
//import {MatTableModule} from '@angular/material/table';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.css']
})

export class ArticlesComponent implements OnInit {
    artList: any = [];
    list: any = [];
    desc: any;
    p: number = 1;
    constructor(
        private commserve: CommonService,
        private route: Router,
        private articleQuery: ArticleQuery
    ) { }


    ngOnInit(): void {
        // this.commserve.getArticle().subscribe((data : any)=>{this.artList = data;
        //   this.list = this.artList;
        //   console.log(this.list)
        // })
        this.articleQuery.getArticles().subscribe(res => {
            this.list = res;
        });
        this.articleQuery.getLoaded().pipe(
            switchMap(() => {
                return this.commserve.getArticle();
            })
        ).subscribe(res => { });
    }
    getDescription(data: any) {
        this.desc = data;
    }
    getDetails() {
        this.route.navigate(['userprofile']);
    }
}
