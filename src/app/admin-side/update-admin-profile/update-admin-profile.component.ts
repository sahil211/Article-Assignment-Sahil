import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-update-admin-profile',
  templateUrl: './update-admin-profile.component.html',
  styleUrls: ['./update-admin-profile.component.css']
})
export class UpdateAdminProfileComponent implements OnInit {
  update: FormGroup;
  constructor(private route:Router, private fb:FormBuilder,private comserve:CommonService) { }

  ngOnInit(): void {
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
      adid : data.adid
    };
    console.log(data);
    this.comserve.updateAdminData(dataToPass).subscribe((data:any)=>{
      console.log("hey")      
    })
  }  

}
