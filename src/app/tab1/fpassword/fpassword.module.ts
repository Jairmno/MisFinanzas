import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FpasswordPageRoutingModule } from './fpassword-routing.module';

import { FpasswordPage } from './fpassword.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FpasswordPageRoutingModule,
    SharedModule
  ],
  declarations: [FpasswordPage]
})
export class FpasswordPageModule {}
