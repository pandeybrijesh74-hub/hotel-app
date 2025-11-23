import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationForm } from '../reservation-form/reservation-form';
import { ReservationList } from '../reservation-list/reservation-list';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReservationForm,
    ReservationList
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ReservationModule { }
