import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
    declarations: [ LayoutComponent ],
    imports: [
        CommonModule,
        IonicModule,
        LayoutRoutingModule
    ]
})
export class LayoutModule { }
