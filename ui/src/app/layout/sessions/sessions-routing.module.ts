import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionsComponent } from './sessions.component';

const routes: Routes = [
	{
		path: '',
		component: SessionsComponent
	}
];

@NgModule({
	exports: [ RouterModule ],
	imports: [ RouterModule.forChild(routes) ]
})
export class SessionsRoutingModule { }
