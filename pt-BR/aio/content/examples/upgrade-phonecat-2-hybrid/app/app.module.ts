// #docplaster
// #docregion bare
// #enddocregion upgrademodule
// #docregion httpclientmodule
import {HttpClientModule} from '@angular/common/http';
import {DoBootstrap, NgModule} from '@angular/core';
// #enddocregion httpclientmodule
// #docregion phonelist
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
// #enddocregion bare
// #docregion upgrademodule
import {UpgradeModule} from '@angular/upgrade/static';

// #enddocregion phonelist
// #docregion routeparams
import {routeParamsProvider} from './ajs-upgraded-providers';
// #enddocregion phone
// #docregion checkmarkpipe
import {CheckmarkPipe} from './core/checkmark/checkmark.pipe';
// #enddocregion phonelist
// #docregion phone
import {Phone} from './core/phone/phone.service';
// #enddocregion routeparams
// #docregion phonedetail
import {PhoneDetailComponent} from './phone-detail/phone-detail.component';
// #enddocregion checkmarkpipe
// #docregion phonelist
import {PhoneListComponent} from './phone-list/phone-list.component';
// #enddocregion phonedetail

// #docregion bare, upgrademodule, httpclientmodule, phone, phonelist, phonedetail, checkmarkpipe

@NgModule({
  imports: [
    BrowserModule,
    // #enddocregion bare
    UpgradeModule,
    // #enddocregion upgrademodule
    HttpClientModule,
    // #enddocregion httpclientmodule, phone
    FormsModule,
    // #docregion bare, upgrademodule, httpclientmodule, phone
  ],
  // #enddocregion bare, upgrademodule, httpclientmodule, phone
  declarations: [
    PhoneListComponent,
    // #enddocregion phonelist
    PhoneDetailComponent,
    // #enddocregion phonedetail
    CheckmarkPipe
    // #docregion phonelist, phonedetail
  ],
  // #enddocregion phonelist
  // #docregion phone, routeparams
  providers: [
    Phone,
    // #enddocregion phone
    routeParamsProvider
    // #docregion phone
  ]
  // #enddocregion routeparams
  // #docregion bare, upgrademodule, httpclientmodule, phonelist
})
export class AppModule implements DoBootstrap {
  // #enddocregion bare
  constructor(private upgrade: UpgradeModule) {}
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, ['phonecatApp']);
  }
  // #docregion bare
}
// #enddocregion bare, upgrademodule, httpclientmodule, phone, phonelist, phonedetail, checkmarkpipe
