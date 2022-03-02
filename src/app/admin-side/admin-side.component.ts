import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-admin-side',
  templateUrl: './admin-side.component.html',
  styleUrls: ['./admin-side.component.css']
})
export class AdminSideComponent implements OnInit {
  article: any = [];
  addData: FormGroup;
  userList: any = [];
  artList: any = [];
  list: any = [];
  updateList: any = [];
  artId: any;
  desc: any;
  isShowDiv = false;
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
    this.comserve.getArticle().subscribe((data : any)=>{this.artList = data;
      this.list = this.artList;  
      console.log(this.list)
    })
  }
  displayStyle = "none";
  openPopup() {
    this.displayStyle = "block";
    this.route.navigate(['addarticle-admin']);
  }
  getDescription(data: any) {
    console.log(data);
    this.desc = data;
  }
  updateData() {
    this.route.navigate(['update-admin']);
  }
  viewUser(){
    this.route.navigate(['ownarticles-admin']);
  }
  updatePopup(id: any) {
    this.displayStyle = "block";
    this.artId = id;
  }
  updateArticle(data: any) {
    this.comserve.getArticle().subscribe((data: any) => {
      this.updateList = data;
    })
    console.log(this.updateList);
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
}
