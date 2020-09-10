import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservationListingComponent } from './pages/reservation-listing/reservation-listing.component';
import { ReservationConfirmationComponent } from './reservation-confirmation/reservation-confirmation.component';
import { AuthGuard } from '../auth.guard';


const routes: Routes = [
  {
    path: "",
    component: ReservationListingComponent,
    canActivate: [AuthGuard]
  },
  { path: 'confirmation', component: ReservationConfirmationComponent,
  canActivate: [AuthGuard]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
