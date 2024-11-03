import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JournalComponent } from './journal.component';

const routes: Routes = [
	{
		path: '',
		component: JournalComponent
	}
];

@NgModule({
	exports: [ RouterModule ],
	imports: [ RouterModule.forChild(routes) ]
})
export class JournalRoutingModule { }
