import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-normal-user',
  templateUrl: './normal-user.component.html',
  styleUrls: ['./normal-user.component.css']
})
export class NormalUserComponent implements OnInit {
  signupForm: FormGroup;
  users: any = [];
  users1: any = [];
  isAdmin: string;
  selectedLevel;
  data: Array<Object> = [
    { id: 0, name: "Admin" },
    { id: 1, name: "User" }
  ];
  constructor(private route: Router, private fb: FormBuilder, private commserv: CommonService) {
  }
  ngOnInit() {
    localStorage.removeItem("isAdmin");
    this.signupForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.commserv.getUser().subscribe((data1: any) => {
      this.users = data1;
    })
  }
  // selected(){
  //   localStorage.removeItem("isAdmin");
  //   if(this.selectedLevel.name === "User"){
  //     localStorage.setItem("isAdmin", "true");
  //   }
  //   // else if(this.selectedLevel.name === "Admin"){
  //   //   localStorage.setItem("isAdmin", "true");
  //   // }
  //   else{
  //     localStorage.setItem("isAdmin", "false");
  //   }
  //   alert(this.selectedLevel.name)
  // }
  onSubmit(data) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email === data.email) {
        if (data.email === "admin@gmail.com") {
          alert("You are admin");
          console.log("UserId at Login time: ", this.users[i].id),
          this.route.navigate(['admin-side'])
        } else {
          localStorage.setItem("isloggedin", "true");
          this.route.navigate(['myarticle']);
          console.log("UserId at Login time: ", this.users[i].id),
          // localStorage.setItem("userName",this.users[i].name);
          // localStorage.setItem("userEmail",this.users[i].email);
          // localStorage.setItem("userPassword",this.users[i].password);
          alert("Login Successfully");
        }
        localStorage.setItem("userId", this.users[i].id);
      }
    }
  }
  viewUser() {
    this.route.navigate(['ownarticles']);
  }
  signUp() {
    this.route.navigate(['register']);
  }
  articles() {
    this.route.navigate(['articles']);
  }

}
