import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AhorrosPageRoutingModule } from './ahorros-routing.module';

import { AhorrosPage } from './ahorros.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AhorrosPageRoutingModule,
    SharedModule
  ],
  declarations: [AhorrosPage]
})
export class AhorrosPageModule {}
