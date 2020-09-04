import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestsComponent } from './guests/guests.component';
import { SharedModule } from '../shared/shared.module';
import { GuestDetailsComponent } from './guest-details/guest-details.component';



@NgModule({
  declarations: [
    GuestsComponent,
    GuestDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    GuestsComponent,
    GuestDetailsComponent
  ]
})
export class GuestsModule { }
