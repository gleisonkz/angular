// #docregion
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeroFormReactiveComponent} from './reactive/hero-form-reactive.component';
import {UniqueAlterEgoValidatorDirective} from './shared/alter-ego.directive';
import {ForbiddenValidatorDirective} from './shared/forbidden-name.directive';
import {IdentityRevealedValidatorDirective} from './shared/identity-revealed.directive';
import {HeroFormTemplateComponent} from './template/hero-form-template.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent, HeroFormTemplateComponent, HeroFormReactiveComponent, ForbiddenValidatorDirective,
    IdentityRevealedValidatorDirective, UniqueAlterEgoValidatorDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
