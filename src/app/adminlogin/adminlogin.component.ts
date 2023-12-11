import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewService } from '../new.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  adminform!:FormGroup;
  type:any='';
  retype:any='';
  inputun:any;
  isnotchange=true;
  ischange=false;
  inputpass:any;
  ischeck:boolean=false;
  admin=[{username:'vijaya',password:'12345@'}]
  constructor(private fb:FormBuilder,private test:NewService,public router: Router){
    this.adminform=this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }
  ngOnInit(): void {

  }
  username(event:Event){
   this.inputun= (<HTMLInputElement>event.target).value;
  }
  password(event:Event){
    this.inputun= (<HTMLInputElement>event.target).value;
   }
check():void{
for(let i:number=0;i<1;i++){
  if((this.adminform.get('username')?.value==this.admin[i].username)&&(this.adminform.get('password')?.value==this.admin[i].password)){
    this.ischeck=true;
  }
  else{
    console.log(this.adminform.get('username')?.value==this.admin[i].username);
  }
}
this.router.navigate(['available']);
this.test.set(this.ischeck);
}
changepassword(){
  this.ischange=!this.ischange;
  this.isnotchange=!this.isnotchange;
}
submitpass(){
  if(this.type==this.retype){
    for(let i:number=0;i<1;i++){
    this.admin[i].password=this.type;
    alert('Saved')
    }
  }
  else{
    alert('Not Saved')
  }
}
}
