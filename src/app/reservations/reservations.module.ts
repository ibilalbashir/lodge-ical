import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationsComponent } from './reservations/reservations.component';
import { SharedModule } from '../shared/shared.module';
import { CheckoutReportComponent } from './checkout-report/checkout-report.component';
import { ReservationConfirmationComponent } from './reservation-confirmation/reservation-confirmation.component';

@NgModule({
  declarations: [
    ReservationsComponent,
    CheckoutReportComponent,
    ReservationConfirmationComponent
  ],
  imports: [
    CommonModule,

    SharedModule
  ],
  exports: [
    ReservationsComponent
  ]
})
export class ReservationsModule { }
