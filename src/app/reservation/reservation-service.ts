import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
    reservations: Reservation[] = [];
   
    constructor() {
        this.reservations = JSON.parse(localStorage.getItem('reservations') || '[]');
    }

    addReservation(reservation: Reservation): void {
        this.reservations.push(reservation);
        localStorage.setItem('reservations', JSON.stringify(this.reservations));
    } 

    getReservations(): Reservation[] {
        this.reservations = JSON.parse(localStorage.getItem('reservations') || '[]');
        return this.reservations;
    }   

    clearReservations(): void {
        localStorage.removeItem('reservations');
        this.reservations = [];
    }

    getReservationById(id: string): Reservation | undefined {
        return this.reservations.find(reservation => reservation.id === id);  
    }

    deleteReservation(id: string): void {
        let index = this.reservations.findIndex(reservation => reservation.id === id);
        this.reservations.splice(index, 1);
        localStorage.setItem('reservations', JSON.stringify(this.reservations));
    }

    updateReservation(id:string,updatedReservation: Reservation): void {
        let index = this.reservations.findIndex(reservation => reservation.id === id);   
        this.reservations[index] = updatedReservation;
        localStorage.setItem('reservations', JSON.stringify(this.reservations));
    }
}
