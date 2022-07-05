import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HelloWorldBindingsComponent} from './hello-world-bindings/hello-world-bindings.component';
import {HelloWorldDependencyInjectionComponent} from './hello-world-di/hello-world-di.component';
import {HelloWorldInterpolationComponent} from './hello-world-interpolation/hello-world-interpolation.component';
import {HelloWorldNgIfComponent} from './hello-world-ngif/hello-world-ngif.component';
import {HelloWorldTemplateComponent} from './hello-world-template.component';
import {HelloWorldComponent} from './hello-world/hello-world.component';



@NgModule({
  declarations: [
    AppComponent, HelloWorldComponent, HelloWorldTemplateComponent, HelloWorldNgIfComponent,
    HelloWorldDependencyInjectionComponent, HelloWorldInterpolationComponent,
    HelloWorldBindingsComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
