import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-own-articles',
  templateUrl: './own-articles.component.html',
  styleUrls: ['./own-articles.component.css']
})
export class OwnArticlesComponent implements OnInit {
  userList: any = [];
  list: any = [];
  email: any;
  name: any;
  id: any;
  titles: Array<{ title: any }> = [];
  counters: any = [];
  p : number = 1;

  constructor(private commserve: CommonService) { }


  ngOnInit(): void {

    this.commserve.getArticle().subscribe((data: any) => {
      this.list = data;
      console.log("Articles :", this.list);
    })
    this.commserve.getUser().subscribe((data: any) => {
      //  console.log(localStorage.getItem("userId"));
      var d = +localStorage.getItem("userId");
      this.userList = data;
      for (let i = 0; i < data.length; i++) {
        this.commserve.getArticleForUser(data[i].id).subscribe((data:any) => {
          this.counters.push(data)
          console.log("data1 : ", this.counters)
        })
      }
      console.log("data : ", this.counters);
    });


  }
  getDetails(data: any) {
    this.titles.forEach((element, index) => {
      if (index !== -1) {
        this.titles.splice(index);
      }
    });
    this.id = data.id;
    for (let index = 0; index < this.list.length; index++) {
      if (this.id == this.list[index].uid) {
        this.titles.push({ title: this.list[index].title });
      }
    }
    return this.titles
  }
}
