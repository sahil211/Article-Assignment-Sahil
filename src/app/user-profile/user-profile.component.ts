import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
userList : any= [];
artList : any= [];
list1 : any= [];
list2 : any= [];
email : any;
name : any;
id : any;
titles : Array<{title: any}> = []; 
article : any = [];
isShowDiv = false;  
  constructor(private commserve:CommonService) { }

  ngOnInit(): void {
    this.commserve.getUser().subscribe((data : any)=>{this.userList = data;
      this.list1 = this.userList;  
      })
      this.commserve.getArticle().subscribe((data : any)=>{this.artList = data;
        this.list2 = this.artList;  
        console.log(this.list2)
      })
  }
  getDetails(data : any ){
    this.titles.forEach((element,index)=>{
      if(index !== -1){
        this.titles.splice(index);
      }
   });  
    this.email=data.email;
    this.name = data.name;
    this.id = data.id;
    this.isShowDiv = true;  
    for(let index = 0 ; index<this.list2.length ; index++){
        if(this.id == this.list2[index].uid){
            console.log(this.list2[index].title);
            this.titles.push({ title: this.list2[index].title });
        }
    }
  }
}