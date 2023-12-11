import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewService } from '../new.service';
import { item } from 'src/item';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {
  kitchen!:FormGroup
essentials=item[0].essentials
fooditem=item[0].fooditem
biscuits=item[0].biscuits

arr:any[]=[]

  ischoice: boolean=false;
constructor(private fb:FormBuilder,private test: NewService){
  this.kitchen=this.fb.group({
    search:['',[Validators.required]]
  })

}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
search(){
  this.ischoice=true;
  if(this.kitchen.get('search')?.value=="essentials"){
   this.arr=this.essentials
  }
  else{
    if(this.kitchen.get('search')?.value=="fooditem"){
      this.arr=this.fooditem
    }
    else{
      if(this.kitchen.get('search')?.value=="biscuits"){
        this.arr=this.biscuits
      }
   
    }
  }
}
buy(x:any,y:any){

let dumarr=[{a:x,b:y}];
console.log(x)
console.log(y)
this.test.set(dumarr);
}

}
