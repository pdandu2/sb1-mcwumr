import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';

@NgModule({
	declarations: [ SearchComponent ],
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		SearchRoutingModule
	]
})
export class SearchModule { }
