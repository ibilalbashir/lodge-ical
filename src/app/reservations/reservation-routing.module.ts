import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservationListingComponent } from './pages/reservation-listing/reservation-listing.component';
import { ReservationConfirmationComponent } from './reservation-confirmation/reservation-confirmation.component';


const routes: Routes = [
  {
    path: "",
    component: ReservationListingComponent
  },
  { path: 'confirmation', component: ReservationConfirmationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
