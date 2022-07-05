// #docregion
import {CommonModule} from '@angular/common';
import {NgModule, Optional, SkipSelf} from '@angular/core';

import {LoggerService} from './logger.service';
import {throwIfAlreadyLoaded} from './module-import-guard';
import {NavComponent} from './nav/nav.component';

@NgModule({
  imports: [
    CommonModule // we use ngFor
  ],
  exports: [NavComponent],
  declarations: [NavComponent],
  providers: [LoggerService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
