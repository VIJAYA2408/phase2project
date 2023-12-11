import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewService {
  dummyvar:any;
    constructor() { }
    public  get(){
     return this.dummyvar;
    }
    public set(val:any){
       this.dummyvar=val;
    }
  }
