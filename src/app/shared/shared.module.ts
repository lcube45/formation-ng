import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { TotalPipe } from './pipes/total.pipe';
import { TypeColorDirective } from './directives/type-color.directive';

@NgModule({
  declarations: [TableComponent, TotalPipe, TypeColorDirective],
  imports: [
    CommonModule
  ],
  exports: [
    TableComponent,
    TotalPipe,
    TypeColorDirective
  ]
})
export class SharedModule { }
