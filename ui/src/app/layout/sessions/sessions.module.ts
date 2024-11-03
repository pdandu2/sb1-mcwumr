import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SessionsRoutingModule } from './sessions-routing.module';
import { SessionsComponent, TimelineComponent, TimelineItemComponent, TimelineTimeComponent } from './sessions.component';

@NgModule({
	declarations: [ 
		SessionsComponent,
		TimelineComponent,
		TimelineItemComponent,
		TimelineTimeComponent
	 ],
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		SessionsRoutingModule
	]
})
export class SessionsModule { }
