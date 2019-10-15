import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { EditPrestationComponent } from './containers/edit-prestation/edit-prestation.component';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { PrestationsRoutingModule } from './prestations-routing.module';


@NgModule({
  declarations: [ListPrestationsComponent, EditPrestationComponent, AddPrestationComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule
  ]
})

export class PrestationsModule { }
