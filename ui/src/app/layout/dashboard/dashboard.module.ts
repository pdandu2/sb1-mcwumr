import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
	declarations: [ DashboardComponent ],
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		DashboardRoutingModule
	]
})
export class DashboardModule { }
