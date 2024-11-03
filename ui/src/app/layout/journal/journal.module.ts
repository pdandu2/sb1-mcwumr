import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JournalRoutingModule } from './journal-routing.module';
import { JournalComponent } from './journal.component';

@NgModule({
	declarations: [ JournalComponent ],
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		JournalRoutingModule
	]
})
export class JournalModule { }
