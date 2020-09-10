import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestsComponent } from './pages/guests/guests.component';
import { GuestDetailsComponent } from './pages/guest-details/guest-details.component';
import { AuthGuard } from '../auth.guard';


const routes: Routes = [
    {
        path: "",
        component: GuestsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'guests/:id',
        component: GuestDetailsComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GuestRoutingModule { }
