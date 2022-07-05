import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {ProductListComponent} from './product-list/product-list.component';
import {TopBarComponent} from './top-bar/top-bar.component';

@NgModule({
  imports: [
    BrowserModule, ReactiveFormsModule, RouterModule.forRoot([
      {path: '', component: ProductListComponent},
    ])
  ],
  declarations: [AppComponent, TopBarComponent, ProductListComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
