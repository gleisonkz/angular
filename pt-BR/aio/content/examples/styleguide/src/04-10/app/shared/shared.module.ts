// #docregion
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {FilterTextComponent} from './filter-text/filter-text.component';
import {FilterTextService} from './filter-text/filter-text.service';
import {InitCapsPipe} from './init-caps.pipe';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [FilterTextComponent, InitCapsPipe],
  providers: [FilterTextService],
  exports: [CommonModule, FormsModule, FilterTextComponent, InitCapsPipe]
})
export class SharedModule {
}
