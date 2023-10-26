import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'headsets',
    loadChildren: () => import('./headsets/headsets.module').then(m => m.HeadsetsPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersPageModule)
  },
  {
    path: 'users-form',
    loadChildren: () => import('./users-form/users-form.module').then(m => m.UsersFormPageModule)
  },
  {
    path: 'headsets-form',
    loadChildren: () => import('./headsets-form/headsets-form.module').then(m => m.HeadsetsFormPageModule)
  },
  {
    path: 'update-form/:id',
    loadChildren: () => import('./update-form/update-form.module').then(m => m.UpdateFormPageModule)
  },
  {
    path: 'form-sales',
    loadChildren: () => import('./form-sales/form-sales.module').then( m => m.FormSalesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
