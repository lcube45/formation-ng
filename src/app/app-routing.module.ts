import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {path: 'prestations', loadChildren: () => import('./prestations/prestations.module').then(
    (m) => m.PrestationsModule
  )},
  {path: 'clients', loadChildren: () => import('./clients/clients.module').then(
    (m) => m.ClientsModule
  )}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
