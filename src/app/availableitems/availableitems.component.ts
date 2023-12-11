import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NewService } from '../new.service';
import { item } from 'src/item';

@Component({
  selector: 'app-availableitems',
  templateUrl: './availableitems.component.html',
  styleUrls: ['./availableitems.component.css']
})
export class AvailableitemsComponent implements OnInit {
  allowadd:boolean=false;
  choosedone:any;
  disadd=false;
  essentials=item[0].essentials;
  fooditem=item[0].fooditem;
  biscuits=item[0].biscuits;
  ischeck:boolean=false;
  isthischeck:boolean=false;
  avail_items:any[]=[];
  selecteditem:any[]=[]
name:string="";
price!:number;
quantity!:number;
  ess: boolean=false;
  fditem: boolean=false;
  bis: boolean=false;
  data: any;
  constructor(private test: NewService,private fb:FormBuilder){
}
ngOnInit(){
  this.ischeck=this.test.get();
  console.log(this.isthischeck);
  if(this.ischeck==true){
    this.avail_items=[{items:"essentials",id:1},
    {items:"fooditem",id:2},
    {items:"biscuits",id:3}]
  }
   else{
     this.isthischeck=true
     console.log(this.isthischeck);
     }

}
secontypeevent(event:Event){
  this.allowadd=true;
  this.choosedone=(<HTMLInputElement>event.target).value
if(this.choosedone=="essentials"){
  this.fditem=true;
  this.ess=false;
  this.bis=false;
}
else{
  if(this.choosedone=="fooditem"){
    this.ess=true;
    this.fditem=false;
    this.bis=false;
  }
  else{
    if(this.choosedone=="biscuits"){
      this.bis=true;
      this.fditem=false;
      this.ess=false;
    }
 
  }
}
}
add(){
 this.disadd=!this.disadd
}
submit(){
  console.log(this.name)
  if(this.choosedone=="essentials"){
    let dum=[{types:this.name,price:this.price,quantity:this.quantity}]
this.essentials=[...this.essentials,...dum]
  }
  else{
    if(this.choosedone=="fooditem"){
      let dum=[{types:this.name,price:this.price,quantity:this.quantity}]
      this.fooditem=[...this.fooditem,...dum]
    }
    else{
      if(this.choosedone=="biscuits"){
        let dum=[{types:this.name,price:this.price,quantity:this.quantity}]
        this.biscuits=[...this.biscuits,...dum]
      }
    }
  }
}
deletee(x:any){
  if(this.choosedone=="essentials"){
    this.essentials.splice(x,1);
  }
  else{
    if(this.choosedone=="fooditem"){
      this.fooditem.splice(x,1);
    }
    else{
      if(this.choosedone=="biscuits"){
        this.biscuits.splice(x,1);
      }
   
  }
}
}


}
