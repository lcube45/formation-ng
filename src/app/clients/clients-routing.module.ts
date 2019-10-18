import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClientComponent } from './containers/add-client/add-client.component';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import { EditClientComponent } from './containers/edit-client/edit-client.component';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'add', component: AddClientComponent},
  {path: 'list', component: ListClientsComponent},
  {path: 'edit/:id', component: EditClientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ClientsRoutingModule {

}
