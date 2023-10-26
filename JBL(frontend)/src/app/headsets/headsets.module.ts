import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeadsetsPageRoutingModule } from './headsets-routing.module';

import { HeadsetsPage } from './headsets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeadsetsPageRoutingModule
  ],
  declarations: [HeadsetsPage]
})
export class HeadsetsPageModule {}
