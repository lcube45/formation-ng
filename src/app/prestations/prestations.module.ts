import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { EditPrestationComponent } from './containers/edit-prestation/edit-prestation.component';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { TemplatesModule } from '../templates/templates.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormPrestationComponent } from './components/form-prestation/form-prestation.component';

@NgModule({
  declarations: [ListPrestationsComponent, EditPrestationComponent, AddPrestationComponent, FormPrestationComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    TemplatesModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class PrestationsModule { }
