import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {Validator2Directive, ValidatorDirective} from './shared';

@NgModule({
  imports: [RouterModule.forChild([{path: '06-03', component: AppComponent}])],
  declarations: [AppComponent, ValidatorDirective, Validator2Directive],
  exports: [AppComponent]
})
export class AppModule {
}
