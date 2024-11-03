import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent } from './registration.component';

const routes: Routes = [
    {
        path: '',
        component: RegistrationComponent
    }
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forChild(routes) ]
})
export class RegistrationRoutingModule { }
