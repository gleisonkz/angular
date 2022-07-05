import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HostChildComponent} from './host-child/host-child.component';
import {HostParentComponent} from './host-parent/host-parent.component';
import {HostComponent} from './host/host.component';
import {OptionalComponent} from './optional/optional.component';
import {SelfNoDataComponent} from './self-no-data/self-no-data.component';
import {SelfComponent} from './self/self.component';
import {SkipselfComponent} from './skipself/skipself.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent, OptionalComponent, SelfComponent, SelfNoDataComponent, HostComponent,
    SkipselfComponent, HostParentComponent, HostChildComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {
}
