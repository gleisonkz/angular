import {Component} from '@angular/core';

import {AnimalService} from './animal.service';
import {FlowerService} from './flower.service';


@Component(
    {selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
// #docregion injection
export class AppComponent {
  constructor(public flower: FlowerService) {}
}
// #enddocregion injection
