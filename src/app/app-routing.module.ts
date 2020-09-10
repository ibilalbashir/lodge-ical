import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SinginComponent } from './singin/singin.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { BillingComponent } from './billing/billing/billing.component';
import { ResourcesComponent } from './resources/resources/resources.component';
import { ReservationConfirmationComponent } from './reservations/reservation-confirmation/reservation-confirmation.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: SinginComponent },

  { path: 'dashboard', component: DashboardComponent, data: { routeIdx: 0 } },
  {
    path: 'reservations',
    loadChildren: () => import('./reservations/reservations.module').then(m => m.ReservationsModule),
    data: { routeIdx: 1 }
  },
  { path: 'reservations/confirmation', component: ReservationConfirmationComponent },
  { path: 'calendar', component: CalendarComponent, data: { routeIdx: 2 } },
  { path: 'billing', component: BillingComponent, data: { routeIdx: 3 } },
  {
    path: "guests",
    loadChildren: () => import('./guests/guests.module').then(m => m.GuestsModule),
    data: { routeIdx: 4 }
  },
  { path: 'resources', component: ResourcesComponent, data: { routeIdx: 5 } },

  { path: '**', redirectTo: 'login', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
