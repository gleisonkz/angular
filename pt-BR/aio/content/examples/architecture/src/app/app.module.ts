// #docregion imports
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BackendService} from './backend.service';
// #enddocregion imports
import {HeroDetailComponent} from './hero-detail.component';
import {HeroListComponent} from './hero-list.component';
import {HeroService} from './hero.service';
import {Logger} from './logger.service';
import {SalesTaxComponent} from './sales-tax.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HeroDetailComponent, HeroListComponent, SalesTaxComponent],
  providers: [BackendService, HeroService, Logger],
  bootstrap: [AppComponent]
})
// #docregion export
export class AppModule {
}
// #enddocregion export
