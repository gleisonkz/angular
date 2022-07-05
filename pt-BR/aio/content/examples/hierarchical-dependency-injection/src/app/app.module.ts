// #docregion
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {carComponents} from './car.components';
import {HeroTaxReturnComponent} from './hero-tax-return.component';
import {HeroesListComponent} from './heroes-list.component';
import {VillainsListComponent} from './villains-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent, carComponents, HeroesListComponent, HeroTaxReturnComponent, VillainsListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
