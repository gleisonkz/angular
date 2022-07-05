import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {OrdersRoutingModule} from './orders-routing.module';
import {OrdersComponent} from './orders.component';

@NgModule({imports: [CommonModule, OrdersRoutingModule], declarations: [OrdersComponent]})
export class OrdersModule {
}
