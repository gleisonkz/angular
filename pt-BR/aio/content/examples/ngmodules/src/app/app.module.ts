// #docplaster

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

// #enddocregion import-for-root

/* Routing Module */
import {AppRoutingModule} from './app-routing.module';
/* App Root */
import {AppComponent} from './app.component';
/* Feature Modules */
import {ContactModule} from './contact/contact.module';
// #docregion import-for-root
import {GreetingModule} from './greeting/greeting.module';

// #docregion import-for-root
@NgModule({
  imports: [
    // #enddocregion import-for-root
    BrowserModule, ContactModule,
    // #docregion import-for-root
    GreetingModule.forRoot({userName: 'Miss Marple'}),
    // #enddocregion import-for-root
    AppRoutingModule
    // #docregion import-for-root
  ],
  // #enddocregion import-for-root
  declarations: [AppComponent],
  bootstrap: [AppComponent]
  // #docregion import-for-root
})
// #enddocregion import-for-root
export class AppModule {
}
