// #docplaster
// #docregion
// #docregion remove-heroes
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
// #enddocregion remove-heroes
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
// #docregion remove-heroes
import {AppComponent} from './app.component';
import {CrisisListComponent} from './crisis-list/crisis-list.component';
import {HeroesModule} from './heroes/heroes.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

@NgModule({
  // #docregion module-imports
  imports: [
    BrowserModule,
    // #enddocregion module-imports
    // #enddocregion remove-heroes
    BrowserAnimationsModule,
    // #docregion remove-heroes
    // #docregion module-imports
    FormsModule, HeroesModule, AppRoutingModule
  ],
  // #enddocregion module-imports
  declarations: [AppComponent, CrisisListComponent, PageNotFoundComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
// #enddocregion remove-heroes
// #enddocregion
