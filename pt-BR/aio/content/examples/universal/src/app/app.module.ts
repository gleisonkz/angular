import {isPlatformBrowser} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {APP_ID, Inject, NgModule, PLATFORM_ID} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroSearchComponent} from './hero-search/hero-search.component';
import {HeroesComponent} from './heroes/heroes.component';
import {InMemoryDataService} from './in-memory-data.service';
import {MessagesComponent} from './messages/messages.component';


@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: 'tour-of-heroes'}), FormsModule, AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false})
  ],
  declarations: [
    AppComponent, DashboardComponent, HeroesComponent, HeroDetailComponent, MessagesComponent,
    HeroSearchComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
      // eslint-disable-next-line @typescript-eslint/ban-types
      @Inject(PLATFORM_ID) private platformId: object, @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ? 'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
