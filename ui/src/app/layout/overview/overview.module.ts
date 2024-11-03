import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';

@NgModule({
	declarations: [ OverviewComponent ],
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		OverviewRoutingModule,
		ReactiveFormsModule
	]
})
export class OverviewModule { }

