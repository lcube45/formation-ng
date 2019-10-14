import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './containers/ui/ui.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [UiComponent, HeaderComponent, FooterComponent, NavComponent],
  imports: [
    CommonModule
  ],
  exports: [
    UiComponent
  ]
})
export class UiModule { }
