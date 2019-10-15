import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateAComponent } from './containers/template-a/template-a.component';
import { TemplateBComponent } from './containers/template-b/template-b.component';

@NgModule({
  declarations: [TemplateAComponent, TemplateBComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TemplateAComponent,
    TemplateBComponent
  ]
})

export class TemplatesModule { }
