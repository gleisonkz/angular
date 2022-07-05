// #docplaster
// imports
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
// #docregion directive-import
import {ItemDirective} from './item.directive';
// #enddocregion directive-import


// @NgModule decorator with its metadata
@NgModule({
  // #docregion declarations
  declarations: [AppComponent, ItemDirective],
  // #enddocregion declarations
  // #docregion imports
  imports: [BrowserModule, FormsModule, HttpClientModule],
  // #enddocregion imports
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
