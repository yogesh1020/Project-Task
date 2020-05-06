import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './customer/login/login.component';
import { ProfileComponent } from './customer/profile/profile.component';


const routes: Routes = [
  {
    path:'customer' , component:CustomerComponent
  },
  {
    path:'product' , component:ProductComponent
  },
  {
    path:'login' , component:LoginComponent
  },
  {
    path:'profile' , component:ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
