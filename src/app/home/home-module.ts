import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from './home';
import { AppRoutingModule } from "../app-routing-module";
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    Home
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule
]
})
export class HomeModule { }
