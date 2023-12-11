import { Component, OnInit } from '@angular/core';
import { NewService } from '../new.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  arr:any;
  ispay:boolean=false;
  dialog:boolean=true;
  paid:any;
  iscancel:boolean=false;
  selectedquantity!:number;
  answer!:number;
  constructor(private test: NewService){}
  ngOnInit(){
    this.arr=this.test.get();
    console.log(this.arr[0].b)

console.log(this.answer)
  }
  alertok(){
  
   if (confirm('Are you sure?')) {
  // Save it!
  console.log('quantity was saved .');
  this.answer=(this.arr[0].b*this.selectedquantity);
} else {
  // Do nothing!
  console.log('quantity was not saved');
}
  }
  pay(){
    this.dialog=false;
    this.ispay=true
  }
  cancel(){
    this.dialog=false;
this.iscancel=true;
  }


}
