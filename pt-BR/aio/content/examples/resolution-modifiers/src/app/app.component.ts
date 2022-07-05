import {Component} from '@angular/core';

import {FlowerService} from './flower.service';
import {LeafService} from './leaf.service';

@Component(
    {selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent {
  name = 'Angular';
  constructor(public flower: FlowerService, public leaf: LeafService) {}
}
