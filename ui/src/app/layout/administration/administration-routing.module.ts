import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrationComponent } from './administration.component';

const routes: Routes = [
	{
		path: '',
		component: AdministrationComponent
	}
];

@NgModule({
	exports: [ RouterModule ],
	imports: [ RouterModule.forChild(routes) ]
})
export class AdministrationRoutingModule { }
