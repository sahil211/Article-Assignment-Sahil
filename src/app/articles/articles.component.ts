import { Component, OnInit } from '@angular/core';
import {NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { NgxPaginationModule } from 'ngx-pagination';
//import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})

export class ArticlesComponent implements OnInit {
artList : any = [];
list : any= [];
desc : any;
p : number = 1;
  constructor(private commserve:CommonService , private route:Router) { }


  ngOnInit(): void {
    // this.commserve.getArticle().subscribe((data : any)=>{this.artList = data;
    //   this.list = this.artList;  
    //   console.log(this.list)
    // })  
    this.commserve.getArticle().subscribe((data : any)=>{this.artList = data;
      this.list = this.artList;  
      console.log(this.list)
    })
  } 
  getDescription(data : any){
    this.desc=data;
  } 
  getDetails(){
    this.route.navigate(['userprofile']);
  }
}