import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';

@NgModule({
	declarations: [ PatientsComponent ],
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		PatientsRoutingModule
	]
})
export class PatientsModule { }
