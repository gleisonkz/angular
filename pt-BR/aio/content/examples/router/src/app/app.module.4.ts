// #docplaster
// #docregion
// #docregion crisis-center-module, admin-module
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

// #enddocregion crisis-center-module

import {AdminModule} from './admin/admin.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ComposeMessageComponent} from './compose-message/compose-message.component';
import {CrisisCenterModule} from './crisis-center/crisis-center.module';
import {HeroesModule} from './heroes/heroes.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

// #docregion crisis-center-module

@NgModule({
  imports: [
    CommonModule, FormsModule, HeroesModule, CrisisCenterModule,
    // #enddocregion crisis-center-module
    AdminModule,
    // #docregion crisis-center-module
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    // #enddocregion crisis-center-module
    ComposeMessageComponent,
    // #docregion crisis-center-module
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
// #enddocregion
