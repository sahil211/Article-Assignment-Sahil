import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-ownarticles',
  templateUrl: './ownarticles.component.html',
  styleUrls: ['./ownarticles.component.css']
})
export class OwnarticlesComponent implements OnInit {
  userList: any = [];
  list: any = [];
  email: any;
  name: any;
  id: any;
  titles: Array<{ title: any }> = [];
  counters: any = [];
  constructor(private commserve: CommonService) { }

  ngOnInit(): void { this.commserve.getArticle().subscribe((data: any) => {
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
  deleteUser(data: any) {
    console.log(data);
    this.commserve.deleteUser(data).subscribe((dat) => {
      alert("Deleted");
    })
  }
}
