import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {SharedModule} from '../shared/shared.module';

import {ContactRoutingModule} from './contact-routing.module';
import {ContactComponent} from './contact.component';
import {ContactService} from './contact.service';

@NgModule({
  imports: [SharedModule, ContactRoutingModule, ReactiveFormsModule],
  declarations: [ContactComponent],
  providers: [ContactService]
})
export class ContactModule {
}
