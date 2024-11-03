import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicationRoutingModule } from './medication-routing.module';
import { MedicationComponent, MedicinePopoverComponent, OptionPopoverComponent } from './medication.component';
import { MedicationService } from './medication.service';

@NgModule({
	declarations: [ MedicationComponent, MedicinePopoverComponent, OptionPopoverComponent ],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		IonicModule,
		MedicationRoutingModule
	],
	providers: [ MedicationService ]
})
export class MedicationModule { }
