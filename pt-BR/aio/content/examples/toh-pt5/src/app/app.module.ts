import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroesComponent} from './heroes/heroes.component';
import {MessagesComponent} from './messages/messages.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations:
      [AppComponent, DashboardComponent, HeroesComponent, HeroDetailComponent, MessagesComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
