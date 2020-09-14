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
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ClientSetupComponent } from './pages/client-setup/client-setup.component';
import { EmailBodySetupComponent } from './components/email-body-setup/email-body-setup.component';
import { CorrespondenceSetupComponent } from './components/correspondence-setup/correspondence-setup.component';
import { EmailServerSetupComponent } from './components/email-server-setup/email-server-setup.component';
import { ClientComponent } from './components/client/client.component';
import { LogoSetupComponent } from './components/logo-setup/logo-setup.component';
import { MatExpansionModule } from '@angular/material/expansion';
// './pages/client-setup/client-setup.component'
@NgModule({
  declarations: [EmailBodySetupComponent, CorrespondenceSetupComponent, SettingsComponent, EmailServerSetupComponent, TasksComponent, AutomationsComponent, EmployeesComponent, InventoryComponent, ReportsComponent, RecurrenceComponent, ClientComponent, LogoSetupComponent, ClientSetupComponent],
  imports: [
    CommonModule,
    MatCardModule,
    SharedModule,
    SettingsRoutingModule,
    MatFormFieldModule,
    NgxDropzoneModule,
    MatExpansionModule

  ],
  exports: [
    SettingsComponent
  ]
})
export class SettingsModule { }
