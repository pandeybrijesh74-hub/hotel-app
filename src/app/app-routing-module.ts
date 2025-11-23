import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { ReservationForm } from './reservation-form/reservation-form';
import { ReservationList } from './reservation-list/reservation-list';

const routes: Routes = [
  {path: '', component: Home},
  {path: 'create-reservation',component:ReservationForm},
  {path: 'reservation-list',component:ReservationList}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
