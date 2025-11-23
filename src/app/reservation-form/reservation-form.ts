import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  standalone: false,
  templateUrl: './reservation-form.html',
  styleUrl: './reservation-form.css',
})
export class ReservationForm implements OnInit {

  reservationForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      roomNumber: ['', [Validators.required, Validators.min(1), Validators.max(100)]]        
    })
  }


  onSubmit() {
    
    if (this.reservationForm.valid) {
     // console.log('Reservation submitted: '+ JSON.stringify(this.reservationForm.value));
      console.log('Guest Name: ' + this.reservationForm.value.guestName);
      console.log('Guest Email: ' + this.reservationForm.value.guestEmail);
      console.log('Check-In Date: ' + this.reservationForm.value.checkInDate);
      console.log('Check-Out Date: ' + this.reservationForm.value.checkOutDate);
      console.log('Room Number: ' + this.reservationForm.value.roomNumber);
      } else {
        console.log('Form is invalid');
      }
  }

}
