import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormSalesPageRoutingModule } from './form-sales-routing.module';

import { FormSalesPage } from './form-sales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormSalesPageRoutingModule
  ],
  declarations: [FormSalesPage]
})
export class FormSalesPageModule {}
