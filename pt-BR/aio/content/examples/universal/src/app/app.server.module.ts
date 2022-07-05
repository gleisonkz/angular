import {NgModule} from '@angular/core';
import {ServerModule} from '@angular/platform-server';

import {AppComponent} from './app.component';
import {AppModule} from './app.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  providers: [
    // Add server-only providers here.
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {
}
