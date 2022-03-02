import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.css']
})
export class UpdateDataComponent implements OnInit {
  update: FormGroup;
  constructor(private route:Router, private fb:FormBuilder,private comserve:CommonService ) { }
  ngOnInit() {
    this.update=this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],

    });
  }
  updateSubmit(data:any){
    console.log(data);
    let dataToPass = {
      name : data.name,
      email : data.email,
      id : data.id
    };
    console.log(data);
    this.comserve.updateData(dataToPass, localStorage.getItem("userId")).subscribe((data:any)=>{
      // this.id = data.id      
    })
  }  
}
