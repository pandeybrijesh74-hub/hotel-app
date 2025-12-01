import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
     private reservations: Reservation[] = [];
     private apiUrl = 'http://localhost:3000'; 
     constructor(private http: HttpClient) {}
   
    // constructor() {
    //     this.reservations = JSON.parse(localStorage.getItem('reservations') || '[]');
    // }

    addReservation(reservation: Reservation): Observable<void> {
        return this.http.post<void>(this.apiUrl+"/reservation", reservation);
        //this.reservations.push(reservation);        
        // localStorage.setItem('reservations', JSON.stringify(this.reservations));
    } 

    getReservations(): Observable<Reservation[]> {
        // this.reservations = JSON.parse(localStorage.getItem('reservations') || '[]');       
        return this.http.get<Reservation[]>(this.apiUrl+"/reservations");
    }   

    // clearReservations(): void {
    //     localStorage.removeItem('reservations');
    //     this.reservations = [];
    // }

    getReservationById(id: string): Observable<Reservation> {
        return this.http.get<Reservation>(this.apiUrl+"/reservation/"+id);  
    }

    deleteReservation(id: string): Observable<void> {
        return this.http.delete<void>(this.apiUrl+"/reservation/"+id);
        //let index = this.reservations.findIndex(reservation => reservation.id === id);
        //this.reservations.splice(index, 1);
        // localStorage.setItem('reservations', JSON.stringify(this.reservations));
    }

    updateReservation(id:string,updatedReservation: Reservation): Observable<void> {
        return this.http.put<void>(this.apiUrl+"/reservation/"+id, updatedReservation);
        //let index = this.reservations.findIndex(reservation => reservation.id === id);   
        //this.reservations[index] = updatedReservation;
        // localStorage.setItem('reservations', JSON.stringify(this.reservations));
    }
}
