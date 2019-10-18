import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditClientComponent } from './containers/edit-client/edit-client.component';
import { AddClientComponent } from './containers/add-client/add-client.component';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { FormClientComponent } from './components/form-client/form-client.component';


@NgModule({
  declarations: [EditClientComponent, AddClientComponent, ListClientsComponent, FormClientComponent],
  imports: [
    CommonModule,
    TemplatesModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
