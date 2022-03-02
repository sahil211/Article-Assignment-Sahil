import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-my-articles',
  templateUrl: './my-articles.component.html',
  styleUrls: ['./my-articles.component.css']
})
export class MyArticlesComponent implements OnInit {
  article: any = [];
  addData: FormGroup;
  userList: any = [];
  artList: any = [];
  list: any = [];
  updateList: any = [];
  artId: any;
  desc: any;
  isShowDiv = false;
  p : number =1;
  errorMessage: any;
  constructor(private fb: FormBuilder, private comserve: CommonService, private route: Router) { }


  ngOnInit(): void {
    this.addData = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.comserve.getArticleForUser(localStorage.getItem("userId")).subscribe((data: any) => {
      this.artList = data;
      this.list = this.artList;
      console.log(this.list)
    })
    this.comserve.getUser().subscribe((data: any) => {
      this.userList = data;
      this.userList = this.userList;
      console.log(this.userList)
    })
  }
  displayStyle = "none";
  displayStyle1 = "none";
  openPopup() {
    this.displayStyle = "block";
    this.route.navigate(['addarticle']);
  }
  getDescription(data: any) {
    console.log(data);
    this.desc = data;
  }
  updateData() {
    this.route.navigate(['updatedata']);
  }
  updatePopup(id: any) {
    this.displayStyle1 = "block";
    this.artId = id;
  }
  updateArticle(data: any) {
    this.comserve.getArticleForUser(localStorage.getItem("userId")).subscribe((data: any) => {
      this.updateList = data;
    })
    for (let index = 0; index < this.updateList.length; index++) {
      const element = this.updateList[index];
      if (element.id == this.artId) {
        let dataToPass = {
          title: data.title,
          description: data.description,
          uid: localStorage.getItem("userId"),
        }
        this.comserve.updateArticle(dataToPass, this.artId).subscribe((data: any) => {
          console.log(data);
          alert("Updated");
        });
      }
    }
  }
  deleteArt(data: any) {
    console.log(data);
    this.comserve.deleteArticle(data).subscribe((dat) => {
      alert("Deleted");
    })
  }
  deleteAccount() {
    console.log(localStorage.getItem("userId"));
    this.comserve.getArticle().subscribe((data: any) => {
      data.forEach((element:any) =>{
        if(element.uid === localStorage.getItem("userId")){
          this.comserve.deleteArticle(element.id).subscribe((data1:any) => {
          })
        }
      })
    })
    this.comserve.deleteAccount(localStorage.getItem("userId")).subscribe((dat) => {
      alert("Your account and articles Deleted");
    })   
    this.route.navigate(['login']);
  }
}