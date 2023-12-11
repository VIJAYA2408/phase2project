import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyerComponent } from './buyer/buyer.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AvailableitemsComponent } from './availableitems/availableitems.component';
import { MaterialComponent } from './material/material.component';

const routes: Routes = [
  {path: '',component:BuyerComponent},
  {path: 'admin',component:AdminloginComponent},
  {path:'buyer',component: MaterialComponent},
  {path:'available',component:AvailableitemsComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
