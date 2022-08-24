import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { OrderComponent } from './order/order.component';



@NgModule({
  declarations: [
    CartComponent,
    OrderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
