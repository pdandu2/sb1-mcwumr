import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualisationsComponent } from './visualisations.component';

const routes: Routes = [
	{
		path: '',
		component: VisualisationsComponent
	}
];

@NgModule({
	exports: [ RouterModule ],
	imports: [ RouterModule.forChild(routes) ]
})
export class VisualisationsRoutingModule { }
