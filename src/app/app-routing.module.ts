import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ReservationsComponent } from './reservations/reservations/reservations.component';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { BillingComponent } from './billing/billing/billing.component';
import { GuestsComponent } from './guests/guests/guests.component';
import { ResourcesComponent } from './resources/resources/resources.component';
import { GuestDetailsComponent } from './guests/guest-details/guest-details.component';
import { ReservationConfirmationComponent } from './reservations/reservation-confirmation/reservation-confirmation.component';
import { SinginComponent } from './singin/singin.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, data: { routeIdx: 0 } },
  { path: 'reservations', component: ReservationsComponent, data: { routeIdx: 1 } },
  { path: 'reservations/confirmation', component: ReservationConfirmationComponent },
  { path: 'calendar', component: CalendarComponent, data: { routeIdx: 2 } },
  { path: 'billing', component: BillingComponent, data: { routeIdx: 3 } },
  { path: 'guests', component: GuestsComponent, data: { routeIdx: 4 } },
  { path: 'guests/:id', component: GuestDetailsComponent },
  { path: 'resources', component: ResourcesComponent, data: { routeIdx: 5 } },
  {path: 'login', component: SinginComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
