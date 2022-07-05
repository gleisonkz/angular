import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ComponentOverviewComponent} from './component-overview/component-overview.component';

@NgModule({
  declarations: [AppComponent, ComponentOverviewComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
