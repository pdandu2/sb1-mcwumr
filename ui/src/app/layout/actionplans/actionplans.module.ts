import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionPlansRoutingModule } from './actionplans-routing.module';
import { ActionPlansComponent } from './actionplans.component';

@NgModule({
	declarations: [ ActionPlansComponent ],
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		ActionPlansRoutingModule
	]
})
export class ActionPlansModule { }
