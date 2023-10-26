import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeadsetsPage } from './headsets.page';

const routes: Routes = [
  {
    path: '',
    component: HeadsetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeadsetsPageRoutingModule {}
