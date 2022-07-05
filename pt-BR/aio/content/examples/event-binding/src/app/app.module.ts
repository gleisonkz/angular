import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ClickDirective} from './click.directive';
import {ItemDetailComponent} from './item-detail/item-detail.component';


@NgModule({
  declarations: [AppComponent, ItemDetailComponent, ClickDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
