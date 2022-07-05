import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ChildComponent} from './child/child.component';
import {InspectorComponent} from './inspector/inspector.component';

// #docregion appmodule
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ChildComponent, InspectorComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {
}
// #enddocregion appmodule
