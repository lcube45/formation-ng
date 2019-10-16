import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { TotalPipe } from './pipes/total.pipe';

@NgModule({
  declarations: [TableComponent, TotalPipe],
  imports: [
    CommonModule
  ],
  exports: [
    TableComponent,
    TotalPipe
  ]
})
export class SharedModule { }
