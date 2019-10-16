import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { EditPrestationComponent } from './containers/edit-prestation/edit-prestation.component';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { TemplatesModule } from '../templates/templates.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListPrestationsComponent, EditPrestationComponent, AddPrestationComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    TemplatesModule,
    SharedModule,
    FormsModule
  ]
})

export class PrestationsModule { }
