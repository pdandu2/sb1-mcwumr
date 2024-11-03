import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionPlansComponent } from './actionplans.component';

const routes: Routes = [
	{
		path: '',
		component: ActionPlansComponent
	}
];

@NgModule({
	exports: [ RouterModule ],
	imports: [ RouterModule.forChild(routes) ]
})
export class ActionPlansRoutingModule { }
