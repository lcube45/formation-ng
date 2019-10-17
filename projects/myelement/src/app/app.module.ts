import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, ApplicationRef } from '@angular/core';

import { AppComponent } from './app.component';
import { SocialButtonComponent } from './social-button/social-button.component';
import { createCustomElement } from '@angular/elements';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SocialButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [
    AppComponent,
    SocialButtonComponent
  ]
})

export class AppModule {

  constructor(private injector: Injector) {

  }

  ngDoBootstrap(app: ApplicationRef) {
    if (environment.production) {
      const myCustomElement = createCustomElement(SocialButtonComponent, {injector: this.injector});
      customElements.define('social-button', myCustomElement);
    } else {
      app.bootstrap(AppComponent);
    }
  }
}
