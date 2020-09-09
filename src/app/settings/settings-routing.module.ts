import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SettingsComponent } from './settings/settings.component';
import { TasksComponent } from './tasks/tasks.component';
import { AutomationsComponent } from './automations/automations.component';
import { EmployeesComponent } from './employees/employees.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ReportsComponent } from './reports/reports.component';
import { EmailServerSetupComponent } from './email-server-setup/email-server-setup.component';
import { ClientComponent } from './client/client.component';
import { EmailBodySetupComponent } from './email-body-setup/email-body-setup.component';
import { CorrespondenceSetupComponent } from './correspondence-setup/correspondence-setup.component';
import { LogoSetupComponent } from './logo-setup/logo-setup.component';

const settingsRoutes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent,
    children: [
      { path: 'tasks', component: TasksComponent },
      { path: 'automations', component: AutomationsComponent },
      { path: 'employees', component: EmployeesComponent },
      { path: 'inventory', component: InventoryComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'email', component: EmailServerSetupComponent },
      { path: 'client', component: ClientComponent },
      { path: 'email-body', component: EmailBodySetupComponent },
      { path: 'correspondence', component: CorrespondenceSetupComponent },
      { path: 'logo', component: LogoSetupComponent },
      { path: '', redirectTo: 'tasks', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(settingsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SettingsRoutingModule { }
