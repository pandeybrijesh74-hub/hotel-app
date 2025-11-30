import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home-module';
import { ReservationForm } from './reservation-form/reservation-form';
import { ReservationList } from './reservation-list/reservation-list';
import { HomeComponent } from './home-component/home-component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'create-reservation',component:ReservationForm},
  {path: 'reservation-list',component:ReservationList},
  {path: 'edit-reservation/:id',component:ReservationForm }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
