import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ListComponent } from './list/list.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
