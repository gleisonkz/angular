// #docregion
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {DynamicFormQuestionComponent} from './dynamic-form-question.component';
import {DynamicFormComponent} from './dynamic-form.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [AppComponent, DynamicFormComponent, DynamicFormQuestionComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
