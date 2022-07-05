import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';

import {CustomersDetailComponent} from './customers-detail.component';
import {CustomersListComponent} from './customers-list.component';
import {CustomersRoutingModule} from './customers-routing.module';
import {CustomersComponent} from './customers.component';
import {CustomersService} from './customers.service';


@NgModule({
  imports: [SharedModule, CustomersRoutingModule],
  declarations: [
    CustomersComponent,
    CustomersDetailComponent,
    CustomersListComponent,
  ],
  providers: [CustomersService]
})
export class CustomersModule {
}
