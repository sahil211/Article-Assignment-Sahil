import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: FormGroup;
  //id = 11;
  constructor(private route:Router, private fb:FormBuilder,private comserve:CommonService ) { }
  ngOnInit() {
    this.register=this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],

    });
  }
  registerSubmit(data:any){
    console.log(data);
    let dataToPass = {
      name : data.name,
      email : data.email,
    //  id : this.id++,
    };
    console.log(data);
    this.comserve.addingUser(dataToPass).subscribe((data:any)=>{
      console.log(data);
      alert("Registration Successfully");
      this.route.navigate(['login']);
    })
  }
  login(){
    this.route.navigate(['login']);
  }  
}
