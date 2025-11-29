import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  standalone: false,
  templateUrl: './reservation-form.html',
  styleUrl: './reservation-form.css',
})
export class ReservationForm implements OnInit {

  reservationForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }



  ngOnInit(): void {
    // Form Initialization and Validation
    this.reservationForm = this.formBuilder.group({
      id: [Date.now().toString()],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      roomNumber: ['', [Validators.required, Validators.min(1), Validators.max(100)]]        
    })

    // Check if we are in edit mode
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    
    if (id) {
      let reservation = this.reservationService.getReservationById(id);        
      if (reservation) {
        this.reservationForm.patchValue(reservation);
      }
    }
  }


  onSubmit() {
    
    if (this.reservationForm.valid) {
      let id = this.activatedRoute.snapshot.paramMap.get('id');
      if (id) {
        this.reservationService.updateReservation(id,this.reservationForm.value);        
      }else {
         this.reservationService.addReservation(this.reservationForm.value);
      }        
      this.router.navigate(['/reservation-list']);
    }
  }

}
