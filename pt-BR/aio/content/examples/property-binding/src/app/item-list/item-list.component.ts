import {Component, Input} from '@angular/core';

import {Item} from '../item';
import {ITEMS} from '../mock-items';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  listItems = ITEMS;
  // #docregion item-input
  @Input() items: Item[] = [];
  // #enddocregion item-input
  constructor() {}
}
