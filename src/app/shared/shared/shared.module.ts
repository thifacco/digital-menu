import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProductComponent } from '../card-product/card-product.component';
import { CardUserComponent } from '../card-user/card-user.component';



@NgModule({
  declarations: [
    CardProductComponent,
    CardUserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
