import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { EditPrestationComponent } from './containers/edit-prestation/edit-prestation.component';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'add', component: AddPrestationComponent},
  {path: 'list', component: ListPrestationsComponent},
  {path: 'edit', component: EditPrestationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PrestationsRoutingModule {

}
