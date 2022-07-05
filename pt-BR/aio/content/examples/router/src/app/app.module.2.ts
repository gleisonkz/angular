import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CrisisListComponent} from './crisis-list/crisis-list.component';
import {HeroListComponent} from './hero-list/hero-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, HeroListComponent, CrisisListComponent, PageNotFoundComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
