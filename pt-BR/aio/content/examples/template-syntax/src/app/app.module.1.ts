// #docregion
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';  // <--- JavaScript import from Angular
import {BrowserModule} from '@angular/platform-browser';

/* Other imports */

@NgModule({
  imports: [
    BrowserModule,
    FormsModule  // <--- import into the NgModule
  ],
  /* Other module metadata */
})
export class AppModule {
}
