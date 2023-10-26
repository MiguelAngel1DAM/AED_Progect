import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeadsetsFormPage } from './headsets-form.page';

const routes: Routes = [
  {
    path: '',
    component: HeadsetsFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeadsetsFormPageRoutingModule {}
