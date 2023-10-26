import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormSalesPage } from './form-sales.page';

const routes: Routes = [
  {
    path: '',
    component: FormSalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormSalesPageRoutingModule {}
