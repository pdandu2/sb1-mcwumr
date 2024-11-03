import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicationComponent } from './medication.component';

const routes: Routes = [
	{
		path: '',
		component: MedicationComponent
	}
];

@NgModule({
	exports: [ RouterModule ],
	imports: [ RouterModule.forChild(routes) ]
})
export class MedicationRoutingModule { }
