import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import {LoginComponent } from './components/login/login.component';
import{AuthGuard} from './services/canAguard';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { CustomerInformationComponent } from './components/customer-information/customer-information.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
const routes: Routes = [
  {
    path: '',
    component: ProductComponent
  },
  {
    path: 'detail/:id',
    component: ProductDetailComponent
  },
  {
    path: 'cart',
    component: CartComponent,
    //canActivate:[AuthenticatedGuard],
  }
  ,
  {
    path:'login',
    component: LoginComponent,
  },
  { 
    path:'aboutus',
    component:AboutusComponent,
  },
   
  { 
    path:'payment',
    component:PaymentComponent,
  },
  { 
    path:'addCustomerComponent',
    component:AddCustomerComponent,
  },
  { 
    path:'signUp',
    component: CustomerInformationComponent,
  },
  { 
    path:'confirmation',
    component: ConfirmationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }