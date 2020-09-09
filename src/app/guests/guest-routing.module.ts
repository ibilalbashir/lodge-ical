import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestsComponent } from './pages/guests/guests.component';
import { GuestDetailsComponent } from './pages/guest-details/guest-details.component';


const routes: Routes = [
    {
        path: "",
        component: GuestsComponent
    },
    {
        path: 'guests/:id',
        component: GuestDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GuestRoutingModule { }
