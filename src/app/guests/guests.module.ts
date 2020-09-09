import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { GuestRoutingModule } from './guest-routing.module';
import { GuestDetailsComponent } from './pages/guest-details/guest-details.component';
import { GuestsComponent } from './pages/guests/guests.component';



@NgModule({
  declarations: [
    GuestsComponent,
    GuestDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GuestRoutingModule,
  ],
  exports: [
    GuestsComponent,
    GuestDetailsComponent
  ]
})
export class GuestsModule { }
