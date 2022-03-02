import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.css']
})
export class AddarticleComponent implements OnInit {
  article: any = [];
  addData: FormGroup;
  userList: any = [];
  artList: any = [];
  list: any = [];
  updateList: any = [];
  artId: any;
  desc: any;
  displayStyle = "none"
  constructor(private comserve: CommonService,private fb:FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.addData = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.openPopup();
  }openPopup() {
    console.log("Hurray")
    this.displayStyle = "block";
  }
  closePopup(data: any) {
    this.comserve.getUser().subscribe((userList: any) => {
      this.userList = userList;
      console.log(data);
    })
    for (let index = 0; index < this.userList.length; index++) {
      const element = this.userList[index];
      // console.log(this.userList[index]);
      console.log("local storage UserID : ", localStorage.getItem("userId"))
      if (element.id == localStorage.getItem("userId")) {
        let dataToPass = {
          title: data.title,
          description: data.description,
          uid: element.id
        }
        this.comserve.addArticle(dataToPass).subscribe((data: any) => {
          console.log(data);
          alert('article added successfully')      
        });
      }
    }
  }
}
