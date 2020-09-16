import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ReservationsModule } from './reservations/reservations.module';
import { BillingModule } from './billing/billing.module';
import { GuestsModule } from './guests/guests.module';
import { ResourcesModule } from './resources/resources.module';
import { CalendarModule } from './calendar/calendar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SettingsModule } from './settings/settings.module';
import { SinginComponent } from './singin/singin.component'
import { from } from 'rxjs';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    SinginComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MainModule,
    SharedModule,

    DashboardModule,
    ReservationsModule,
    CalendarModule,
    BillingModule,
    GuestsModule,
    ResourcesModule,

    SettingsModule, // has to come before approutingmodule
    AppRoutingModule,

  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
