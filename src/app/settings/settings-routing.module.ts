import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SettingsComponent } from './settings/settings.component';
import { TasksComponent } from './tasks/tasks.component';
import { AutomationsComponent } from './automations/automations.component';
import { EmployeesComponent } from './employees/employees.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ReportsComponent } from './reports/reports.component';
;
import { ClientSetupComponent } from './pages/client-setup/client-setup.component';
import { EmailServerSetupComponent } from './components/email-server-setup/email-server-setup.component';
import { ClientComponent } from './components/client/client.component';
import { EmailBodySetupComponent } from './components/email-body-setup/email-body-setup.component';
import { CorrespondenceSetupComponent } from './components/correspondence-setup/correspondence-setup.component';
import { LogoSetupComponent } from './components/logo-setup/logo-setup.component';
// import { ReservationSetupComponent } from './components/reservation-setup/reservation-setup.component';

const settingsRoutes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent,
    children: [
      { path: 'client-setup', component: ClientSetupComponent },
      { path: 'employees', component: EmployeesComponent },
      { path: 'tasks', component: TasksComponent },
      { path: 'automations', component: AutomationsComponent },
      { path: 'inventory', component: InventoryComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'email', component: EmailServerSetupComponent },
      { path: 'client', component: ClientComponent },
      { path: 'email-body', component: EmailBodySetupComponent },
      { path: 'correspondence', component: CorrespondenceSetupComponent },
      { path: 'logo', component: LogoSetupComponent },
    //  { path: 'reservation-setup', component:ReservationSetupComponent},

      { path: '', redirectTo: 'client-setup', pathMatch: 'full' }
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
