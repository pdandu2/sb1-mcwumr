import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';

@NgModule({
	declarations: [ DetailsComponent ],
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		DetailsRoutingModule
	]
})
export class DetailsModule { }
