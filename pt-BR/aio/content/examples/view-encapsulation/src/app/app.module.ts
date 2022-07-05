import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {EmulatedEncapsulationComponent} from './emulated-encapsulation.component';
import {NoEncapsulationComponent} from './no-encapsulation.component';
import {ShadowDomEncapsulationComponent} from './shadow-dom-encapsulation.component';

@NgModule({
  declarations: [
    AppComponent, NoEncapsulationComponent, ShadowDomEncapsulationComponent,
    EmulatedEncapsulationComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
