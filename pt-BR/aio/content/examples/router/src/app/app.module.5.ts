// #docplaster
// #docregion
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AdminModule} from './admin/admin.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ComposeMessageComponent} from './compose-message/compose-message.component';
import {CrisisCenterModule} from './crisis-center/crisis-center.module';
import {HeroesModule} from './heroes/heroes.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

@NgModule({
  imports:
      [CommonModule, FormsModule, HeroesModule, CrisisCenterModule, AdminModule, AppRoutingModule],
  declarations: [AppComponent, ComposeMessageComponent, PageNotFoundComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
