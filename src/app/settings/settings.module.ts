import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { TasksComponent } from './tasks/tasks.component';
import { AutomationsComponent } from './automations/automations.component';
import { EmployeesComponent } from './employees/employees.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ReportsComponent } from './reports/reports.component';
import { SharedModule } from '../shared/shared.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { RecurrenceComponent } from './automations/recurrence/recurrence.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { ClientComponent } from './client/client.component';
import { EmailServerSetupComponent } from './email-server-setup/email-server-setup.component';
import { CorrespondenceSetupComponent } from './correspondence-setup/correspondence-setup.component';
import { EmailBodySetupComponent } from './email-body-setup/email-body-setup.component';
import { LogoSetupComponent } from './logo-setup/logo-setup.component';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  declarations: [EmailBodySetupComponent, CorrespondenceSetupComponent, SettingsComponent,EmailServerSetupComponent, TasksComponent, AutomationsComponent, EmployeesComponent, InventoryComponent, ReportsComponent, RecurrenceComponent, ClientComponent, LogoSetupComponent],
  imports: [
    CommonModule,
    MatCardModule,
    SharedModule,
    SettingsRoutingModule,
    MatFormFieldModule,
    NgxDropzoneModule,

  ],
  exports: [
    SettingsComponent
  ]
})
export class SettingsModule { }
