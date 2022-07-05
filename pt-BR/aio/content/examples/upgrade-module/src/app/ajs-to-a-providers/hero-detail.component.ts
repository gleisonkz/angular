// #docregion
import {Component} from '@angular/core';

import {Hero} from '../hero';

import {HeroesService} from './heroes.service';

@Component({
  selector: 'hero-detail',
  template: `
    <h2>{{hero.id}}: {{hero.name}}</h2>
  `
})
export class HeroDetailComponent {
  hero: Hero;
  constructor(heroes: HeroesService) {
    this.hero = heroes.get()[0];
  }
}
