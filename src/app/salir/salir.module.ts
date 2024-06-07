import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalirPageRoutingModule } from './salir-routing.module';

import { SalirPage } from './salir.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalirPageRoutingModule,
    SharedModule
  ],
  declarations: [SalirPage]
})
export class SalirPageModule {}
