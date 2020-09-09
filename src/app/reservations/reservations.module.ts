import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ReservationSidebarComponent } from './components/reservation-sidebar/reservation-sidebar.component';
import { ReservationTableComponent } from './components/reservation-table/reservation-table.component';
import { ReservationListingComponent } from './pages/reservation-listing/reservation-listing.component';
import { ReservationRoutingModule } from './reservation-routing.module';
import { CheckoutReportComponent } from './components/checkout-report/checkout-report.component';
import { CommonModule } from '@angular/common';
import { ReservationConfirmationComponent } from './reservation-confirmation/reservation-confirmation.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    CheckoutReportComponent,
    ReservationConfirmationComponent,
    ReservationSidebarComponent,
    ReservationTableComponent,
    ReservationListingComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ReservationRoutingModule
  ],
  exports: [
  ]
})
export class ReservationsModule { }
