// #docregion
// import { AppRoutingModule } from './app-routing.module';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import {AppComponent} from './app.component';
import {HeroBioComponent} from './hero-bio.component';
import {HeroBiosAndContactsComponent, HeroBiosComponent} from './hero-bios.component';
import {HeroContactComponent} from './hero-contact.component';
import {HeroData} from './hero-data';
import {HeroOfTheMonthComponent} from './hero-of-the-month.component';
import {HighlightDirective} from './highlight.directive';
import {AlexComponent, AliceComponent, BarryComponent, BethComponent, BobComponent, CarolComponent, CathyComponent, ChrisComponent, CraigComponent, ParentFinderComponent} from './parent-finder.component';
import {HeroesBaseComponent, SortedHeroesComponent} from './sorted-heroes.component';
import {StorageComponent} from './storage.component';

const declarations = [
  AppComponent,
  HeroBiosComponent,
  HeroBiosAndContactsComponent,
  HeroBioComponent,
  HeroesBaseComponent,
  SortedHeroesComponent,
  HeroOfTheMonthComponent,
  HeroContactComponent,
  HighlightDirective,
  ParentFinderComponent,
];

const componentListA = [AliceComponent, AlexComponent];

const componentListB = [BarryComponent, BethComponent, BobComponent];

const componentListC = [CarolComponent, ChrisComponent, CraigComponent, CathyComponent];

@NgModule({
  imports: [
    BrowserModule, FormsModule, HttpClientModule, InMemoryWebApiModule.forRoot(HeroData)
    // AppRoutingModule TODO: add routes
  ],
  declarations: [
    declarations,
    componentListA,
    componentListB,
    componentListC,
    StorageComponent,
  ],
  bootstrap: [AppComponent],
  // #docregion providers
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
  // #enddocregion providers
})
export class AppModule {
}
