import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ListComponent } from './list/list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '', component: HomeComponent, data: { title: 'Home | Menu Digital' }
}];

@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    NavbarComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class HomeModule { }
