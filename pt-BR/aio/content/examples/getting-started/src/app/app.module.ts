// #docplaster
// #docregion http-client-module-import
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
// #enddocregion http-client-module-import
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
// #docregion declare-cart
import {CartComponent} from './cart/cart.component';
// #docregion declare-product-alerts
import {ProductAlertsComponent} from './product-alerts/product-alerts.component';
// #enddocregion declare-product-alerts
import {ProductDetailsComponent} from './product-details/product-details.component';
import {ProductListComponent} from './product-list/product-list.component';
// #enddocregion declare-cart
import {ShippingComponent} from './shipping/shipping.component';
import {TopBarComponent} from './top-bar/top-bar.component';

// #docregion product-details-route, http-client-module, shipping-route, cart-route,
// declare-product-alerts #docregion declare-cart

@NgModule({
  // #enddocregion declare-product-alerts, declare-cart
  imports: [
    BrowserModule,
    // #enddocregion product-details-route, cart-route
    HttpClientModule,
    // #docregion product-details-route, cart-route
    ReactiveFormsModule, RouterModule.forRoot([
      {path: '', component: ProductListComponent},
      {path: 'products/:productId', component: ProductDetailsComponent},
      // #enddocregion product-details-route
      {path: 'cart', component: CartComponent},
      // #enddocregion cart-route, http-client-module
      {path: 'shipping', component: ShippingComponent},
      // #enddocregion shipping-route
      // #docregion product-details-route, http-client-module, shipping-route, cart-route
    ])
  ],
  // #enddocregion cart-route
  // #docregion declare-product-alerts, declare-cart
  declarations: [
    AppComponent, TopBarComponent, ProductListComponent, ProductAlertsComponent,
    // #enddocregion declare-product-alerts
    ProductDetailsComponent,
    // #enddocregion product-details-route
    CartComponent,
    // #enddocregion declare-cart
    // #enddocregion http-client-module
    ShippingComponent
    // #docregion declare-product-alerts, http-client-module, product-details-route, declare-cart
  ],
  // #enddocregion declare-product-alerts, product-details-route, declare-cart
  bootstrap: [AppComponent]
})
export class AppModule {
}
