import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeadsetsFormPageRoutingModule } from './headsets-form-routing.module';

import { HeadsetsFormPage } from './headsets-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeadsetsFormPageRoutingModule
  ],
  declarations: [HeadsetsFormPage]
})
export class HeadsetsFormPageModule {}
