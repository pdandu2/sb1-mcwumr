import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NgChartsModule } from 'ng2-charts';

import { VisualisationsRoutingModule } from './visualisations-routing.module';
import { VisualisationsComponent } from './visualisations.component';
import { VisualisationsService } from './visualisations.service';

@NgModule({
	declarations: [ VisualisationsComponent ],
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		NgChartsModule,
		VisualisationsRoutingModule
	],
	providers: [ VisualisationsService ]
})
export class VisualisationsModule { }
